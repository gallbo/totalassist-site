import { z } from "zod";

export const REQUISITOS_PASSWORD = [
  { texto: "Mínimo 8 caracteres", cumple: (v: string) => v.length >= 8 },
  { texto: "Al menos 1 letra mayúscula", cumple: (v: string) => /[A-Z]/.test(v) },
  { texto: "Al menos 1 número", cumple: (v: string) => /\d/.test(v) },
  { texto: "Al menos 1 símbolo", cumple: (v: string) => /[\W_]/.test(v) },
];

const passwordPolicy = z
  .string()
  .regex(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    "Tu contraseña debe tener al menos 8 caracteres, con una mayúscula, un número y un símbolo.",
  );

const cedulaPolicy = z
  .string()
  .trim()
  .transform((value) => value.toUpperCase())
  .pipe(
    z
      .string()
      .regex(
        /^(?:[A-Z]\d{6}|\d{5})$/,
        "La cédula debe ser una letra seguida de 6 dígitos o 5 dígitos si es provisional.",
      ),
  );

export const registerSchema = z
  .object({
    nombre: z.string().trim().min(2, "Ingresa tu nombre"),
    apellido_paterno: z.string().trim().min(2, "Ingresa tu apellido paterno"),
    apellido_materno: z
      .string()
      .trim()
      .max(150, "Apellido materno demasiado largo")
      .optional()
      .or(z.literal("")),
    email: z.email({ message: "Ingresa un correo válido" }),
    telefono: z
      .string()
      .trim()
      .regex(/^\d{10}$/, "Ingresa un teléfono de 10 dígitos"),
    cedula: cedulaPolicy,
    password: passwordPolicy,
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Las contraseñas no coinciden",
    path: ["password_confirmation"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
