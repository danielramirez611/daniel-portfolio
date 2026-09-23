import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre."),

  email: z.string().email("Correo inválido."),

  subject: z.string().max(120).optional(),

  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
