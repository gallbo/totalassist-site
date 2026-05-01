"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { Logo } from "@/components/layout/logo";
import { ApiError, registrarBroker } from "@/lib/api/brokers";
import { registerSchema, type RegisterInput } from "@/lib/schemas/auth";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const ERROR_FIELD_MAP: Record<string, keyof RegisterInput> = {
  email_duplicado: "email",
  cedula_invalida: "cedula",
};

const BENEFICIOS = [
  "Respaldo profesional en cada reclamación",
  `Sin costo hasta ${siteConfig.freeUntil}`,
  "Equipo con +27 años atendiendo siniestros",
  "Activación inmediata después del registro",
];

export default function RegistroPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      email: "",
      telefono: "",
      cedula: "",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (values: RegisterInput) => {
    setSubmitting(true);
    try {
      await registrarBroker({
        nombre: values.nombre,
        apellido_paterno: values.apellido_paterno,
        apellido_materno: values.apellido_materno || null,
        email: values.email,
        telefono: values.telefono,
        cedula: values.cedula,
        password: values.password,
      });

      setSuccess(true);
      toast.success("Cuenta creada. Te enviamos un correo de bienvenida.");
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.code && ERROR_FIELD_MAP[error.code]) {
          setError(ERROR_FIELD_MAP[error.code], {
            type: "server",
            message: error.message,
          });
        }
        toast.error(error.message);
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(
          "Ocurrió un problema, intenta de nuevo. Si persiste, contáctanos.",
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-navy relative min-h-svh overflow-hidden text-white">
      <BackgroundPattern variant="auth" invert />

      <div className="relative mx-auto flex min-h-svh w-full max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Total Assist — Inicio"
            className="[&_img]:brightness-0 [&_img]:invert [&_span]:!text-white"
          >
            <Logo variant="compact" priority />
          </Link>
          <Link
            href="/inicio"
            className="hover:text-brand-yellow inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al sitio
          </Link>
        </div>

        <div className="mt-10 grid flex-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <aside className="hidden lg:col-span-5 lg:block">
            <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
              Crea tu cuenta
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight xl:text-5xl">
              Empieza a usar{" "}
              <span className="text-brand-yellow">Total Assist</span> en minutos
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">
              Activa tu cuenta y nuestro equipo se hará cargo de la operación de
              tus reclamaciones desde el primer día.
            </p>

            <ul className="mt-8 space-y-3">
              {BENEFICIOS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="text-brand-yellow mt-0.5 h-5 w-5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 text-neutral-900 shadow-2xl sm:p-8 lg:p-10">
              {success ? (
                <SuccessState />
              ) : (
                <>
                  <h2 className="text-brand-navy text-2xl font-bold sm:text-3xl">
                    Crea tu cuenta
                  </h2>
                  <p className="mt-2 text-sm text-neutral-500">
                    Te enviaremos un correo de bienvenida con el enlace para
                    iniciar sesión.
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-7 space-y-5"
                    noValidate
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Nombre(s)"
                        id="nombre"
                        error={errors.nombre?.message}
                      >
                        <input
                          id="nombre"
                          type="text"
                          autoComplete="given-name"
                          disabled={submitting}
                          className={inputClass(!!errors.nombre)}
                          {...register("nombre")}
                        />
                      </Field>

                      <Field
                        label="Apellido paterno"
                        id="apellido_paterno"
                        error={errors.apellido_paterno?.message}
                      >
                        <input
                          id="apellido_paterno"
                          type="text"
                          autoComplete="family-name"
                          disabled={submitting}
                          className={inputClass(!!errors.apellido_paterno)}
                          {...register("apellido_paterno")}
                        />
                      </Field>

                      <Field
                        label="Apellido materno"
                        id="apellido_materno"
                        optional
                        error={errors.apellido_materno?.message}
                      >
                        <input
                          id="apellido_materno"
                          type="text"
                          disabled={submitting}
                          className={inputClass(!!errors.apellido_materno)}
                          {...register("apellido_materno")}
                        />
                      </Field>

                      <Field
                        label="Cédula CNSF"
                        id="cedula"
                        error={errors.cedula?.message}
                      >
                        <input
                          id="cedula"
                          type="text"
                          autoCapitalize="characters"
                          disabled={submitting}
                          className={inputClass(!!errors.cedula)}
                          {...register("cedula")}
                        />
                      </Field>

                      <Field
                        label="Correo"
                        id="email"
                        error={errors.email?.message}
                      >
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          disabled={submitting}
                          className={inputClass(!!errors.email)}
                          {...register("email")}
                        />
                      </Field>

                      <Field
                        label="Teléfono"
                        id="telefono"
                        error={errors.telefono?.message}
                      >
                        <input
                          id="telefono"
                          type="tel"
                          autoComplete="tel"
                          disabled={submitting}
                          className={inputClass(!!errors.telefono)}
                          {...register("telefono")}
                        />
                      </Field>

                      <Field
                        label="Contraseña"
                        id="password"
                        error={errors.password?.message}
                        hint="10+ caracteres con mayús, minús, número y símbolo."
                      >
                        <PasswordField
                          id="password"
                          autoComplete="new-password"
                          disabled={submitting}
                          invalid={!!errors.password}
                          {...register("password")}
                        />
                      </Field>

                      <Field
                        label="Confirmar contraseña"
                        id="password_confirmation"
                        error={errors.password_confirmation?.message}
                      >
                        <PasswordField
                          id="password_confirmation"
                          autoComplete="new-password"
                          disabled={submitting}
                          invalid={!!errors.password_confirmation}
                          {...register("password_confirmation")}
                        />
                      </Field>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy inline-flex w-full items-center justify-center gap-2 rounded-pill px-10 py-4 text-base font-semibold shadow-lg transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-14 sm:py-4 sm:text-lg"
                      >
                        {submitting ? (
                          <>
                            <Spinner />
                            Creando cuenta...
                          </>
                        ) : (
                          <>
                            Crear cuenta
                            <ArrowRight className="h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-neutral-500">
                      Al crear tu cuenta aceptas nuestros{" "}
                      <Link href="/" className="hover:text-brand-navy underline">
                        términos
                      </Link>{" "}
                      y el{" "}
                      <Link href="/" className="hover:text-brand-navy underline">
                        aviso de privacidad
                      </Link>
                      .
                    </p>
                  </form>

                  <div className="mt-7 border-t border-neutral-200 pt-5 text-center text-sm text-neutral-500">
                    ¿Ya tienes una cuenta?{" "}
                    <a
                      href={`${siteConfig.appUrl}/login`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-navy font-semibold hover:underline"
                    >
                      Inicia sesión
                    </a>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-brand-yellow/20 text-brand-yellow flex h-16 w-16 items-center justify-center rounded-full">
        <CheckCircle2 className="h-9 w-9" />
      </div>
      <h2 className="text-brand-navy mt-5 text-2xl font-bold sm:text-3xl">
        ¡Tu cuenta está lista!
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
        Te enviamos un correo de bienvenida con los siguientes pasos. Para empezar
        a usar Total Assist inicia sesión en el portal con el correo y la
        contraseña que registraste.
      </p>

      <a
        href={`${siteConfig.appUrl}/login`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy mt-7 inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm font-semibold transition-colors"
      >
        Iniciar sesión
        <ArrowRight className="h-4 w-4" />
      </a>

      <Link
        href="/"
        className="text-brand-navy mt-4 text-sm font-medium hover:underline"
      >
        Volver al sitio
      </Link>
    </div>
  );
}

function Field({
  label,
  id,
  error,
  hint,
  optional,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-brand-navy text-sm font-medium"
      >
        {label}
        {optional && (
          <span className="ml-1 text-xs font-normal text-neutral-400">
            (opcional)
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-neutral-500">{hint}</p>
      )}
      {error && <p className="text-state-danger text-xs font-medium">{error}</p>}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full rounded-xl border bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors",
    invalid
      ? "border-state-danger focus:border-state-danger focus:ring-state-danger/20"
      : "focus:border-brand-navy focus:ring-brand-navy/20 border-neutral-200",
    "focus:bg-white focus:ring-2",
    "disabled:cursor-not-allowed disabled:opacity-60",
  );
}

function PasswordField({
  id,
  invalid,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid: boolean }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="relative">
      <input
        id={id}
        type={shown ? "text" : "password"}
        className={cn(inputClass(invalid), "pr-11")}
        {...rest}
      />
      <button
        type="button"
        aria-label={shown ? "Ocultar contraseña" : "Mostrar contraseña"}
        onClick={() => setShown((v) => !v)}
        className="hover:text-brand-navy absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors"
        tabIndex={-1}
      >
        {shown ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

function Spinner() {
  return (
    <span
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden
    />
  );
}
