import { NextResponse } from "next/server";

import { SendContactMessage } from "@/features/contact/application/send-contact-message";

import { contactSchema } from "@/features/contact/domain/schemas/contact.schema";

import { SupabaseContactRepository } from "@/features/contact/infrastructure/supabase-contact.repository";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          error: "Datos del formulario inválidos.",
        },
        {
          status: 400,
        },
      );
    }

    const repository = new SupabaseContactRepository();

    const useCase = new SendContactMessage(repository);

    await useCase.execute(validated.data);

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        error: "No se pudo enviar el mensaje.",
      },
      {
        status: 500,
      },
    );
  }
}
