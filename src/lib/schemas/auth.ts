import { z } from "zod";

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
  });
// Registro en dos pasos (Skipper, migración 144): la contraseña, el domicilio
// y el RFC se capturan en la liga de activación del correo de bienvenida.

export type RegisterInput = z.infer<typeof registerSchema>;
