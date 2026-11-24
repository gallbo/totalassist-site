"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MailCheck,
} from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { Logo } from "@/components/layout/logo";
import { ApiError, registrarBroker } from "@/lib/api/brokers";
import { registerSchema, type RegisterInput } from "@/lib/schemas/auth";
import { siteConfig } from "@/lib/site-config";
import { TERMINOS_VERSION } from "@/lib/terminos";
import {
  PRIVACIDAD_CONSENTIMIENTO,
  PRIVACIDAD_SIMPLIFICADO_PATH,
  PRIVACIDAD_VERSION,
} from "@/lib/privacidad";
import { cn } from "@/lib/utils";
import { registrarEvento } from "@/lib/analitica";

const ERROR_FIELD_MAP: Record<string, keyof RegisterInput> = {
  email_duplicado: "email",
  cedula_invalida: "cedula",
};

// Orden en que aparecen los campos; se usa para llevar la vista al primero con error.
const ORDEN_CAMPOS: (keyof RegisterInput)[] = [
  "nombre",
  "apellido_paterno",
  "apellido_materno",
  "cedula",
  "email",
  "telefono",
];

const BENEFICIOS = [
  "Respaldo profesional en cada reclamación",
  `Sin costo hasta ${siteConfig.freeUntil}`,
  "Equipo con +27 años atendiendo siniestros",
  "Registro en dos minutos y activación por correo",
];

export default function RegistroPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [terminosAceptados, setTerminosAceptados] = useState(false);
  const [privacidadAceptada, setPrivacidadAceptada] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    // Los errores aparecen al salir de cada campo; el botón de envío se
    // habilita solo cuando todo el formulario es válido (ver formularioCompleto).
    mode: "onTouched",
    defaultValues: {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      email: "",
      telefono: "",
      cedula: "",
    },
  });

  const confirmarRegistro = async (values: RegisterInput) => {
    setSubmitting(true);
    try {
      await registrarBroker({
        nombre: values.nombre,
        apellido_paterno: values.apellido_paterno,
        apellido_materno: values.apellido_materno || null,
        email: values.email,
        telefono: values.telefono,
        cedula: values.cedula,
        acepta_terminos: true,
        terminos_version: TERMINOS_VERSION,
        acepta_privacidad: true,
        privacidad_version: PRIVACIDAD_VERSION,
      });

      setSuccess(values.email);
      registrarEvento("registro_completo");
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

  // El botón de envío queda bloqueado hasta que el formulario esté completo y
  // válido y ambas casillas estén marcadas.
  const onValid = (values: RegisterInput) => {
    void confirmarRegistro(values);
  };

  const onInvalid = (fallos: Partial<Record<keyof RegisterInput, unknown>>) => {
    const primero = ORDEN_CAMPOS.find((campo) => fallos[campo]);
    const input = primero ? document.getElementById(primero) : null;
    if (!input) return;
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus({ preventScroll: true });
  };

  const valores = useWatch({ control });
  const formularioCompleto = registerSchema.safeParse(valores).success;

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
            href="/"
            className="hover:text-brand-yellow inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al sitio
          </Link>
        </div>

        <div className="mt-10 grid flex-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <aside className="hidden lg:col-span-5 lg:block">
            <p className="text-brand-yellow text-xs font-semibold tracking-widest uppercase">
              Crea tu cuenta
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] font-bold tracking-tight text-balance xl:text-5xl">
              Empieza a usar{" "}
              <span className="text-brand-yellow">Total Assist</span> en minutos
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">
              Activa tu cuenta y nuestro equipo se hará cargo de la operación de
              tus reclamaciones desde el primer día.
            </p>

            <ul className="mt-8 space-y-3">
              {BENEFICIOS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-neutral-200"
                >
                  <CheckCircle2 className="text-brand-yellow mt-0.5 h-5 w-5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 text-neutral-900 shadow-2xl sm:p-8 lg:p-10">
              {success ? (
                <SuccessState email={success} />
              ) : (
                <>
                  <h2 className="text-brand-navy text-2xl font-bold sm:text-3xl">
                    Crea tu cuenta
                  </h2>
                  <p className="mt-2 text-sm text-neutral-500">
                    Déjanos tus datos y te enviaremos un correo para activar tu
                    cuenta y crear tu contraseña.
                  </p>

                  <form
                    onSubmit={handleSubmit(onValid, onInvalid)}
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
                          autoComplete="additional-name"
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
                          placeholder="Ej. A123456"
                          disabled={submitting}
                          className={cn(
                            inputClass(!!errors.cedula),
                            "placeholder:text-neutral-400",
                          )}
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
                        label="Teléfono celular"
                        id="telefono"
                        error={errors.telefono?.message}
                      >
                        <input
                          id="telefono"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          disabled={submitting}
                          className={inputClass(!!errors.telefono)}
                          {...register("telefono", {
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                              e.target.value = soloDiezDigitos(e.target.value);
                            },
                          })}
                        />
                      </Field>
                    </div>

                    <div className="space-y-2">
                      <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600">
                        <input
                          type="checkbox"
                          checked={terminosAceptados}
                          onChange={(e) => setTerminosAceptados(e.target.checked)}
                          className="accent-brand-navy mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
                        />
                        <span>
                          He leído y acepto los{" "}
                          <a
                            href="/terminos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-navy font-semibold hover:underline"
                          >
                            Términos y Condiciones
                          </a>
                          .
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600">
                        <input
                          type="checkbox"
                          checked={privacidadAceptada}
                          onChange={(e) => setPrivacidadAceptada(e.target.checked)}
                          className="accent-brand-navy mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
                        />
                        <span>
                          {PRIVACIDAD_CONSENTIMIENTO.pre}
                          <a
                            href={PRIVACIDAD_SIMPLIFICADO_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-navy font-semibold hover:underline"
                          >
                            {PRIVACIDAD_CONSENTIMIENTO.simplificado}
                          </a>
                          {PRIVACIDAD_CONSENTIMIENTO.mid}
                          <a
                            href="/aviso-de-privacidad-agentes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-navy font-semibold hover:underline"
                          >
                            totalclaimassist.com/aviso-de-privacidad-agentes
                          </a>
                          {PRIVACIDAD_CONSENTIMIENTO.post}
                        </span>
                      </label>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="submit"
                        disabled={
                          submitting ||
                          !formularioCompleto ||
                          !terminosAceptados ||
                          !privacidadAceptada
                        }
                        className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy rounded-pill inline-flex w-full items-center justify-center gap-2 px-10 py-4 text-base font-semibold shadow-lg transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-14 sm:py-4 sm:text-lg"
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

function SuccessState({ email }: { email: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-brand-yellow/20 text-brand-navy flex h-16 w-16 items-center justify-center rounded-full">
        <MailCheck className="h-8 w-8" />
      </div>
      <h2 className="text-brand-navy mt-5 text-2xl font-bold sm:text-3xl">
        Revisa tu correo
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
        Te enviamos un correo de bienvenida a{" "}
        <strong className="text-brand-navy">{email}</strong> con una liga para
        activar tu cuenta. Ahí vas a crear tu contraseña y completar tu perfil
        con tu domicilio y RFC.
      </p>
      <p className="mt-2 max-w-md text-xs text-neutral-500">
        La liga vence en 7 días. Si no lo ves, revisa tu carpeta de correo no
        deseado o pide una nueva liga.
      </p>

      <a
        href={`${siteConfig.appUrl}/activar`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy rounded-pill mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold transition-colors"
      >
        No me llegó el correo
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
      <label htmlFor={id} className="text-brand-navy text-sm font-medium">
        {label}
        {optional && (
          <span className="ml-1 text-xs font-normal text-neutral-400">
            (opcional)
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-neutral-500">{hint}</p>}
      {error && (
        <p className="text-state-danger text-xs font-medium">{error}</p>
      )}
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

// Sin maxLength en el input: el navegador truncaría lo pegado o autocompletado
// antes de limpiarlo. Si trae lada de país (+52 o +52 1) se quita; si no, se
// conservan los primeros 10 dígitos y el resto no entra.
function soloDiezDigitos(valor: string) {
  const digitos = valor.replace(/\D/g, "");
  const sinLada = digitos.replace(/^521?(?=\d{10}$)/, "");
  return sinLada.slice(0, 10);
}

function Spinner() {
  return (
    <span
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden
    />
  );
}
