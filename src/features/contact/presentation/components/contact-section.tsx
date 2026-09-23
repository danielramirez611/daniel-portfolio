"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormData,
} from "../../domain/schemas/contact.schema";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormData) {
    setSent(false);

    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(values),
    });

    if (!response.ok) {
      return;
    }

    reset();
    setSent(true);
  }

  return (
    <section id="contacto" className="border-t border-white/10 py-20">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-[#121829]/70 p-7 lg:grid-cols-2 lg:p-10">
        <div>
          <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
            07 // CONTACTO
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Construyamos algo juntos.
          </h2>

          <p className="mt-4 max-w-lg text-slate-400">
            Disponible para oportunidades de desarrollo de software, backend y
            proyectos tecnológicos.
          </p>

          <div className="mt-8 space-y-3 font-mono text-sm text-slate-300">
            <p>danielisairamirezsoplopuco@gmail.com</p>

            <p>linkedin.com/in/daniel-ramirezs/</p>

            <p>Chiclayo, Perú</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="Nombre"
            className="w-full rounded-xl border border-white/10 bg-[#070913] px-4 py-3 text-white transition outline-none focus:border-cyan-400"
          />

          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}

          <input
            {...register("email")}
            placeholder="Correo"
            className="w-full rounded-xl border border-white/10 bg-[#070913] px-4 py-3 text-white transition outline-none focus:border-cyan-400"
          />

          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}

          <input
            {...register("subject")}
            placeholder="Asunto"
            className="w-full rounded-xl border border-white/10 bg-[#070913] px-4 py-3 text-white transition outline-none focus:border-cyan-400"
          />

          <textarea
            {...register("message")}
            rows={5}
            placeholder="Cuéntame sobre tu proyecto..."
            className="w-full resize-none rounded-xl border border-white/10 bg-[#070913] px-4 py-3 text-white transition outline-none focus:border-cyan-400"
          />

          {errors.message && (
            <p className="text-xs text-red-400">{errors.message.message}</p>
          )}

          <button
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>

          {sent && (
            <p className="text-sm text-cyan-400">
              Mensaje enviado correctamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
