"use client";

import { useState, type ReactNode } from "react";
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
      className="relative w-full max-w-full overflow-x-clip border-t border-white/[0.07] py-14 sm:py-16 md:py-20 landscape:py-12"
    >
      {/* =================================================
          LUCES DECORATIVAS
      ================================================= */}

      <div className="pointer-events-none absolute top-20 -left-28 h-[250px] w-[250px] rounded-full bg-cyan-400/[0.025] blur-[90px] sm:-left-40 sm:h-[350px] sm:w-[350px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -right-28 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-500/[0.02] blur-[90px] sm:-right-40 sm:h-[350px] sm:w-[350px] sm:blur-[120px]" />

      {/* =================================================
          CONTENEDOR
      ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
            CABECERA
        ================================================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="min-w-0"
        >
          {/* BADGE */}

          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-2.5 py-1.5 sm:px-3">
            <span className="truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-300 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em]">
              Hablemos
            </span>
          </div>

          {/* TÍTULO */}

          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.04em] break-words text-white min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem]">
            Construyamos algo juntos.
          </h2>

          {/* DESCRIPCIÓN */}

          <p className="mt-3 max-w-[680px] text-[13px] leading-6 break-words text-slate-300 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[17px]">
            Disponible para oportunidades de desarrollo de software,
            arquitectura de sistemas y proyectos tecnológicos desafiantes.
          </p>
        </motion.div>

        {/* =================================================
            CONTENIDO PRINCIPAL
        ================================================= */}

        <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] landscape:min-[900px]:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]">
          {/* =================================================
              IZQUIERDA
          ================================================= */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
            }}
            className="flex min-w-0 flex-col gap-3 sm:gap-4"
          >
            {/* =================================================
                EMAIL
            ================================================= */}

            <article className="group min-w-0 overflow-hidden rounded-[14px] border border-white/[0.09] bg-[#151923]/95 p-4 transition duration-300 hover:border-cyan-400/30 min-[360px]:p-5 sm:rounded-[16px] sm:p-6">
              <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
                {/* Icono */}

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 sm:h-11 sm:w-11 sm:rounded-xl">
                  <Mail size={19} />
                </div>

                {/* Información */}

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[8px] leading-4 font-bold tracking-[0.07em] break-words text-slate-500 uppercase min-[360px]:text-[9px] sm:tracking-[0.12em]">
                    Correo electrónico directo
                  </p>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block max-w-full font-mono text-[9px] leading-5 font-bold break-all text-white transition hover:text-cyan-300 min-[360px]:text-[10px] sm:text-[12px]"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* COPIAR */}

              <button
                type="button"
                onClick={copyEmail}
                className="mt-4 flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 text-center font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-300 uppercase transition duration-300 hover:border-cyan-400/35 hover:bg-cyan-400/[0.06] sm:mt-5 sm:min-h-12 sm:gap-3 sm:text-[9px] sm:tracking-[0.12em]"
              >
                {copied ? (
                  <>
                    <Check size={15} className="shrink-0" />

                    <span>Correo copiado</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} className="shrink-0" />

                    <span>Copiar correo</span>
                  </>
                )}
              </button>
            </article>

            {/* =================================================
                LINKEDIN + UBICACIÓN
            ================================================= */}

            <div className="grid min-w-0 grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4">
              {/* LINKEDIN */}

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 rounded-[14px] border border-white/[0.09] bg-[#151923]/95 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:min-h-[86px] sm:gap-4 sm:rounded-[16px] sm:p-5"
              >
                <FaLinkedinIn
                  size={22}
                  className="shrink-0 text-cyan-300 sm:h-6 sm:w-6"
                />

                <div className="min-w-0">
                  <strong className="block text-[13px] text-white sm:text-[14px]">
                    LinkedIn
                  </strong>

                  <span className="mt-1 block max-w-full truncate font-mono text-[8px] text-slate-500 sm:text-[9px]">
                    /in/daniel-ramirezs
                  </span>
                </div>
              </a>

              {/* UBICACIÓN */}

              <article className="flex min-w-0 items-center gap-3 rounded-[14px] border border-white/[0.09] bg-[#151923]/95 p-4 sm:min-h-[86px] sm:gap-4 sm:rounded-[16px] sm:p-5">
                <MapPin
                  size={22}
                  className="shrink-0 text-blue-300 sm:h-6 sm:w-6"
                />

                <div className="min-w-0">
                  <strong className="block text-[13px] text-white sm:text-[14px]">
                    Ubicación
                  </strong>

                  <span className="mt-1 block max-w-full font-mono text-[8px] leading-4 break-words text-slate-500 sm:text-[9px]">
                    Chiclayo, Perú · Remoto
                  </span>
                </div>
              </article>
            </div>

            {/* =================================================
                BOTONES
            ================================================= */}

            <div className="mt-1 grid w-full min-w-0 grid-cols-1 gap-2.5 min-[430px]:grid-cols-2 sm:mt-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
              {/* LinkedIn */}

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-3 text-center font-mono text-[8px] font-bold tracking-[0.06em] whitespace-normal text-white uppercase shadow-[0_12px_30px_rgba(34,211,238,0.12)] transition hover:-translate-y-1 min-[360px]:text-[9px] sm:px-4 sm:tracking-[0.1em]"
              >
                <FaLinkedinIn size={14} className="shrink-0" />

                <span className="break-words">Conectar en LinkedIn</span>
              </a>

              {/* GitHub */}

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 text-center font-mono text-[8px] font-bold tracking-[0.06em] whitespace-normal text-white uppercase transition hover:-translate-y-1 hover:border-cyan-400/30 min-[360px]:text-[9px] sm:px-4 sm:tracking-[0.1em]"
              >
                <Code2 size={14} className="shrink-0" />

                <span>Ver GitHub</span>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 text-center font-mono text-[8px] font-bold tracking-[0.06em] whitespace-normal text-white uppercase transition hover:-translate-y-1 hover:border-cyan-400/30 min-[360px]:text-[9px] min-[430px]:col-span-2 sm:px-4 sm:tracking-[0.1em] lg:col-span-1 xl:col-span-2 2xl:col-span-1"
              >
                <Send size={14} className="shrink-0" />

                <span>Enviar correo</span>
              </a>
            </div>
          </motion.div>

          {/* =================================================
              FORMULARIO
          ================================================= */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="relative min-w-0 overflow-hidden rounded-[16px] border border-white/[0.1] bg-[#171b27]/95 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.18)] min-[360px]:p-5 sm:rounded-[20px] sm:p-6 md:rounded-[22px] md:p-7"
          >
            {/* GLOW */}

            <div className="pointer-events-none absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-cyan-400/[0.025] blur-[80px] sm:-top-24 sm:-right-24 sm:h-[280px] sm:w-[280px] sm:blur-[100px]" />

            <div className="relative min-w-0">
              {/* TÍTULO */}

              <h3 className="max-w-full text-[18px] font-bold tracking-[-0.03em] break-words text-white min-[360px]:text-[19px] sm:text-[21px]">
                Mensaje rápido
              </h3>

              {/* DESCRIPCIÓN */}

              <p className="mt-2 max-w-full text-[11px] leading-5 break-words text-slate-400 sm:text-[12px] sm:leading-6">
                Envíame los requerimientos de tu proyecto y responderé lo antes
                posible.
              </p>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-5 min-w-0 space-y-4 sm:mt-6 sm:space-y-5"
              >
                {/* NOMBRE */}

                <FormField
                  label="Tu nombre / organización"
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    placeholder="Ej. Alex Turner / FinTech Corp"
                    className="h-12 w-full max-w-full min-w-0 rounded-xl border border-white/10 bg-[#090d17] px-3 text-[12px] text-white transition outline-none placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/[0.06] sm:h-[50px] sm:px-4 sm:text-[14px]"
                  />
                </FormField>

                {/* EMAIL */}

                <FormField label="Tu correo" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="alex@empresa.com"
                    className="h-12 w-full max-w-full min-w-0 rounded-xl border border-white/10 bg-[#090d17] px-3 text-[12px] text-white transition outline-none placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/[0.06] sm:h-[50px] sm:px-4 sm:text-[14px]"
                  />
                </FormField>

                {/* ASUNTO */}

                <input
                  {...register("subject")}
                  type="hidden"
                  defaultValue="Contacto desde portafolio"
                />

                {/* MENSAJE */}

                <FormField
                  label="Detalles del proyecto"
                  error={errors.message?.message}
                >
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Cuéntame sobre la arquitectura, alcance técnico o metas..."
                    className="min-h-[110px] w-full max-w-full min-w-0 resize-none rounded-xl border border-white/10 bg-[#090d17] px-3 py-3 text-[12px] leading-6 text-white transition outline-none placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/[0.06] sm:px-4 sm:text-[14px]"
                  />
                </FormField>

                {/* =================================================
                    BOTÓN
                ================================================= */}

                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex min-h-[52px] w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-3 text-center font-mono text-[8px] font-bold tracking-[0.07em] whitespace-normal text-[#07111b] uppercase shadow-[0_12px_35px_rgba(34,211,238,0.15)] transition disabled:cursor-not-allowed disabled:opacity-50 min-[360px]:text-[9px] sm:min-h-[56px] sm:gap-3 sm:px-6 sm:text-[10px] sm:tracking-[0.12em]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-[#07111b]/30 border-t-[#07111b]" />

                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Rocket
                        size={16}
                        className="shrink-0 sm:h-[17px] sm:w-[17px]"
                      />

                      <span className="break-words">
                        Enviar mensaje de contacto
                      </span>
                    </>
                  )}
                </motion.button>

                {/* =================================================
                    ÉXITO
                ================================================= */}

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
                    className="flex min-w-0 items-start gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-3 text-[11px] leading-5 text-emerald-300 sm:px-4 sm:text-[12px]"
                  >
                    <Check size={16} className="mt-0.5 shrink-0" />

                    <span className="min-w-0 break-words">
                      Mensaje enviado correctamente.
                    </span>
                  </motion.div>
                )}

                {/* =================================================
                    ERROR
                ================================================= */}

                {requestError && (
                  <div className="max-w-full rounded-lg border border-red-400/20 bg-red-400/[0.05] px-3 py-3 text-[11px] leading-5 break-words text-red-300 sm:px-4 sm:text-[12px]">
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

/* =========================================================
   CAMPO REUTILIZABLE
========================================================= */

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full max-w-full min-w-0">
      <label className="mb-2 block max-w-full font-mono text-[8px] font-bold tracking-[0.07em] break-words text-slate-500 uppercase min-[360px]:text-[9px] sm:tracking-[0.12em]">
        {label}
      </label>

      {children}

      {error && (
        <p className="mt-2 max-w-full text-[10px] leading-5 break-words text-red-400 sm:text-[11px]">
          {error}
        </p>
      )}
    </div>
  );
}
