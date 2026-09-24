"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Code2, Copy, Mail, MapPin, Rocket, Send } from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

import {
  contactSchema,
  type ContactFormData,
} from "../../domain/schemas/contact.schema";

const EMAIL = "danielisairamirezsoplopuco@gmail.com";

const LINKEDIN = "https://linkedin.com/in/daniel-ramirezs/";

const GITHUB = "https://github.com/danielramirez611";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [requestError, setRequestError] = useState("");
  const [copied, setCopied] = useState(false);

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
    setRequestError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...values,

          subject: values.subject || "Contacto desde portafolio",
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      reset();

      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch {
      setRequestError("No se pudo enviar el mensaje. Inténtalo nuevamente.");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="contacto"
      className="relative border-t border-white/[0.07] py-20"
    >
      {/* Luces decorativas */}
      <div className="pointer-events-none absolute top-20 -left-40 h-[350px] w-[350px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/[0.02] blur-[120px]" />

      <div className="relative">
        {/* =========================
            CABECERA
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <div className="inline-flex items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-3 py-1.5">
            <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-cyan-300 uppercase">
              Hablemos
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white md:text-[2.4rem]">
            Construyamos algo juntos.
          </h2>

          <p className="mt-3 max-w-[680px] text-[15px] leading-7 text-slate-300 md:text-[17px]">
            Disponible para oportunidades de desarrollo de software,
            arquitectura de sistemas y proyectos tecnológicos desafiantes.
          </p>
        </motion.div>

        {/* =========================
            CONTENIDO
        ========================== */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
          {/* =========================
              IZQUIERDA
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
            className="flex flex-col gap-4"
          >
            {/* EMAIL */}
            <article className="group rounded-[16px] border border-white/[0.09] bg-[#151923]/95 p-6 transition duration-300 hover:border-cyan-400/30">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[9px] font-bold tracking-[0.12em] text-slate-500 uppercase">
                    Correo electrónico directo
                  </p>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block truncate font-mono text-[11px] font-bold text-white transition hover:text-cyan-300 sm:text-[12px]"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="mt-5 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] font-mono text-[9px] font-bold tracking-[0.12em] text-cyan-300 uppercase transition duration-300 hover:border-cyan-400/35 hover:bg-cyan-400/[0.06]"
              >
                {copied ? (
                  <>
                    <Check size={15} />
                    Correo copiado
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    Copiar correo
                  </>
                )}
              </button>
            </article>

            {/* LinkedIn + ubicación */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[86px] items-center gap-4 rounded-[16px] border border-white/[0.09] bg-[#151923]/95 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <FaLinkedinIn size={24} className="shrink-0 text-cyan-300" />

                <div>
                  <strong className="block text-[14px] text-white">
                    LinkedIn
                  </strong>

                  <span className="mt-1 block font-mono text-[9px] text-slate-500">
                    /in/daniel-ramirezs
                  </span>
                </div>
              </a>

              <article className="flex min-h-[86px] items-center gap-4 rounded-[16px] border border-white/[0.09] bg-[#151923]/95 p-5">
                <MapPin size={24} className="shrink-0 text-blue-300" />

                <div>
                  <strong className="block text-[14px] text-white">
                    Ubicación
                  </strong>

                  <span className="mt-1 block font-mono text-[9px] text-slate-500">
                    Chiclayo, Perú · Remoto
                  </span>
                </div>
              </article>
            </div>

            {/* Botones */}
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 font-mono text-[9px] font-bold tracking-[0.1em] text-white uppercase shadow-[0_12px_30px_rgba(34,211,238,0.12)] transition hover:-translate-y-1"
              >
                <FaLinkedinIn size={15} />
                Conectar en LinkedIn
              </a>

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 font-mono text-[9px] font-bold tracking-[0.1em] text-white uppercase transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <Code2 size={15} />
                Ver GitHub
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 font-mono text-[9px] font-bold tracking-[0.1em] text-white uppercase transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <Send size={14} />
                Enviar correo
              </a>
            </div>
          </motion.div>

          {/* =========================
              FORMULARIO
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="relative overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#171b27]/95 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] md:p-7"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-[280px] w-[280px] rounded-full bg-cyan-400/[0.025] blur-[100px]" />

            <div className="relative">
              <h3 className="text-[21px] font-bold tracking-[-0.03em] text-white">
                Mensaje rápido
              </h3>

              <p className="mt-2 text-[12px] leading-6 text-slate-400">
                Envíame los requerimientos de tu proyecto y responderé lo antes
                posible.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 space-y-5"
              >
                {/* Nombre */}
                <FormField
                  label="Tu nombre / organización"
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    placeholder="Ej. Alex Turner / FinTech Corp"
                    className="h-[50px] w-full rounded-xl border border-white/10 bg-[#090d17] px-4 text-[14px] text-white transition outline-none placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/[0.06]"
                  />
                </FormField>

                {/* Email */}
                <FormField label="Tu correo" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="alex@empresa.com"
                    className="h-[50px] w-full rounded-xl border border-white/10 bg-[#090d17] px-4 text-[14px] text-white transition outline-none placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/[0.06]"
                  />
                </FormField>

                {/* Asunto oculto visualmente */}
                <input
                  {...register("subject")}
                  type="hidden"
                  value="Contacto desde portafolio"
                />

                {/* Mensaje */}
                <FormField
                  label="Detalles del proyecto"
                  error={errors.message?.message}
                >
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Cuéntame sobre la arquitectura, alcance técnico o metas..."
                    className="min-h-[100px] w-full resize-none rounded-xl border border-white/10 bg-[#090d17] px-4 py-3 text-[14px] leading-6 text-white transition outline-none placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/[0.06]"
                  />
                </FormField>

                {/* Botón */}
                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 font-mono text-[10px] font-bold tracking-[0.12em] text-[#07111b] uppercase shadow-[0_12px_35px_rgba(34,211,238,0.15)] transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#07111b]/30 border-t-[#07111b]" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Rocket size={17} />
                      Enviar mensaje de contacto
                    </>
                  )}
                </motion.button>

                {/* Éxito */}
                {sent && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-[12px] text-emerald-300"
                  >
                    <Check size={16} />
                    Mensaje enviado correctamente.
                  </motion.div>
                )}

                {/* Error servidor */}
                {requestError && (
                  <div className="rounded-lg border border-red-400/20 bg-red-400/[0.05] px-4 py-3 text-[12px] text-red-300">
                    {requestError}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   CAMPO REUTILIZABLE
========================================== */

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[9px] font-bold tracking-[0.12em] text-slate-500 uppercase">
        {label}
      </label>

      {children}

      {error && <p className="mt-2 text-[11px] text-red-400">{error}</p>}
    </div>
  );
}
