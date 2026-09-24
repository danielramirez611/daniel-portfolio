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

/* =========================================================
   DATOS DE CONTACTO
========================================================= */

const EMAIL = "danielisairamirezsoplopuco@gmail.com";

const LINKEDIN = "https://linkedin.com/in/daniel-ramirezs/";

const GITHUB = "https://github.com/danielramirez611";

/* =========================================================
   COMPONENTE
========================================================= */

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

  /* =======================================================
     ENVIAR FORMULARIO
  ======================================================= */

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

  /* =======================================================
     COPIAR EMAIL
  ======================================================= */

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
      className="relative w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-14 transition-colors duration-300 sm:py-16 md:py-20 landscape:py-12 dark:border-white/[0.07]"
    >
      {/* =================================================
          LUZ DECORATIVA IZQUIERDA
      ================================================= */}

      <div className="pointer-events-none absolute top-20 -left-28 h-[250px] w-[250px] rounded-full bg-cyan-400/[0.08] blur-[90px] sm:-left-40 sm:h-[350px] sm:w-[350px] sm:blur-[120px] dark:bg-cyan-400/[0.025]" />

      {/* =================================================
          LUZ DECORATIVA DERECHA
      ================================================= */}

      <div className="pointer-events-none absolute -right-28 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-500/[0.06] blur-[90px] sm:-right-40 sm:h-[350px] sm:w-[350px] sm:blur-[120px] dark:bg-blue-500/[0.02]" />

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

          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 shadow-sm transition-colors duration-300 sm:px-3 dark:border-cyan-300/25 dark:bg-[#1b2330]/80 dark:shadow-none">
            <span className="truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-700 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] dark:text-cyan-300">
              Hablemos
            </span>
          </div>

          {/* TÍTULO */}

          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.04em] break-words text-slate-950 min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem] dark:text-white">
            Construyamos algo juntos.
          </h2>

          {/* DESCRIPCIÓN */}

          <p className="mt-3 max-w-[680px] text-[13px] leading-6 break-words text-slate-600 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[17px] dark:text-slate-300">
            Disponible para oportunidades de desarrollo de software,
            arquitectura de sistemas y proyectos tecnológicos desafiantes.
          </p>
        </motion.div>

        {/* =================================================
            CONTENIDO PRINCIPAL
        ================================================= */}

        <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] landscape:min-[900px]:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]">
          {/* =================================================
              COLUMNA IZQUIERDA
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

            <article className="group min-w-0 overflow-hidden rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_14px_40px_rgba(6,182,212,0.08)] min-[360px]:p-5 sm:rounded-[16px] sm:p-6 dark:border-white/[0.09] dark:bg-[#151923]/95 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:shadow-none">
              <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
                {/* ICONO */}

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700 sm:h-11 sm:w-11 sm:rounded-xl dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <Mail size={19} />
                </div>

                {/* INFORMACIÓN */}

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[8px] leading-4 font-bold tracking-[0.07em] break-words text-slate-500 uppercase min-[360px]:text-[9px] sm:tracking-[0.12em]">
                    Correo electrónico directo
                  </p>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block max-w-full font-mono text-[9px] leading-5 font-bold break-all text-slate-950 transition hover:text-cyan-700 min-[360px]:text-[10px] sm:text-[12px] dark:text-white dark:hover:text-cyan-300"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* COPIAR */}

              <button
                type="button"
                onClick={copyEmail}
                className="mt-4 flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-center font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-700 uppercase transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-50 sm:mt-5 sm:min-h-12 sm:gap-3 sm:text-[9px] sm:tracking-[0.12em] dark:border-white/10 dark:bg-white/[0.05] dark:text-cyan-300 dark:hover:border-cyan-400/35 dark:hover:bg-cyan-400/[0.06]"
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
                className="group flex min-w-0 items-center gap-3 rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_12px_35px_rgba(6,182,212,0.07)] sm:min-h-[86px] sm:gap-4 sm:rounded-[16px] sm:p-5 dark:border-white/[0.09] dark:bg-[#151923]/95 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:shadow-none"
              >
                <FaLinkedinIn
                  size={22}
                  className="shrink-0 text-cyan-600 sm:h-6 sm:w-6 dark:text-cyan-300"
                />

                <div className="min-w-0">
                  <strong className="block text-[13px] text-slate-950 sm:text-[14px] dark:text-white">
                    LinkedIn
                  </strong>

                  <span className="mt-1 block max-w-full truncate font-mono text-[8px] text-slate-500 sm:text-[9px]">
                    /in/daniel-ramirezs
                  </span>
                </div>
              </a>

              {/* UBICACIÓN */}

              <article className="flex min-w-0 items-center gap-3 rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:min-h-[86px] sm:gap-4 sm:rounded-[16px] sm:p-5 dark:border-white/[0.09] dark:bg-[#151923]/95 dark:shadow-none">
                <MapPin
                  size={22}
                  className="shrink-0 text-blue-600 sm:h-6 sm:w-6 dark:text-blue-300"
                />

                <div className="min-w-0">
                  <strong className="block text-[13px] text-slate-950 sm:text-[14px] dark:text-white">
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
              {/* LINKEDIN */}

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-3 text-center font-mono text-[8px] font-bold tracking-[0.06em] whitespace-normal text-white uppercase shadow-[0_12px_30px_rgba(34,211,238,0.12)] transition hover:-translate-y-1 min-[360px]:text-[9px] sm:px-4 sm:tracking-[0.1em]"
              >
                <FaLinkedinIn size={14} className="shrink-0" />

                <span className="break-words">Conectar en LinkedIn</span>
              </a>

              {/* GITHUB */}

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-center font-mono text-[8px] font-bold tracking-[0.06em] whitespace-normal text-slate-800 uppercase shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-700 min-[360px]:text-[9px] sm:px-4 sm:tracking-[0.1em] dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.07] dark:hover:text-white"
              >
                <Code2 size={14} className="shrink-0" />

                <span>Ver GitHub</span>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-center font-mono text-[8px] font-bold tracking-[0.06em] whitespace-normal text-slate-800 uppercase shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-700 min-[360px]:text-[9px] min-[430px]:col-span-2 sm:px-4 sm:tracking-[0.1em] lg:col-span-1 xl:col-span-2 2xl:col-span-1 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.07] dark:hover:text-white"
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
            className="relative min-w-0 overflow-hidden rounded-[16px] border border-slate-200 bg-white p-4 shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition-colors duration-300 min-[360px]:p-5 sm:rounded-[20px] sm:p-6 md:rounded-[22px] md:p-7 dark:border-white/[0.1] dark:bg-[#171b27]/95 dark:shadow-[0_22px_70px_rgba(0,0,0,0.18)]"
          >
            {/* =================================================
                GLOW
            ================================================= */}

            <div className="pointer-events-none absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-cyan-400/[0.07] blur-[80px] sm:-top-24 sm:-right-24 sm:h-[280px] sm:w-[280px] sm:blur-[100px] dark:bg-cyan-400/[0.025]" />

            <div className="relative min-w-0">
              {/* TÍTULO */}

              <h3 className="max-w-full text-[18px] font-bold tracking-[-0.03em] break-words text-slate-950 min-[360px]:text-[19px] sm:text-[21px] dark:text-white">
                Mensaje rápido
              </h3>

              {/* DESCRIPCIÓN */}

              <p className="mt-2 max-w-full text-[11px] leading-5 break-words text-slate-500 sm:text-[12px] sm:leading-6 dark:text-slate-400">
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
                {/* =================================================
                    NOMBRE
                ================================================= */}

                <FormField
                  label="Tu nombre / organización"
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    placeholder="Ej. Alex Turner / FinTech Corp"
                    className="h-12 w-full max-w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 text-[12px] text-slate-900 transition outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-2 focus:ring-cyan-400/[0.10] sm:h-[50px] sm:px-4 sm:text-[14px] dark:border-white/10 dark:bg-[#090d17] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50 dark:focus:bg-[#090d17] dark:focus:ring-cyan-400/[0.06]"
                  />
                </FormField>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <FormField label="Tu correo" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="alex@empresa.com"
                    className="h-12 w-full max-w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 text-[12px] text-slate-900 transition outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-2 focus:ring-cyan-400/[0.10] sm:h-[50px] sm:px-4 sm:text-[14px] dark:border-white/10 dark:bg-[#090d17] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50 dark:focus:bg-[#090d17] dark:focus:ring-cyan-400/[0.06]"
                  />
                </FormField>

                {/* =================================================
                    ASUNTO
                ================================================= */}

                <input
                  {...register("subject")}
                  type="hidden"
                  defaultValue="Contacto desde portafolio"
                />

                {/* =================================================
                    MENSAJE
                ================================================= */}

                <FormField
                  label="Detalles del proyecto"
                  error={errors.message?.message}
                >
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Cuéntame sobre la arquitectura, alcance técnico o metas..."
                    className="min-h-[110px] w-full max-w-full min-w-0 resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-[12px] leading-6 text-slate-900 transition outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-2 focus:ring-cyan-400/[0.10] sm:px-4 sm:text-[14px] dark:border-white/10 dark:bg-[#090d17] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50 dark:focus:bg-[#090d17] dark:focus:ring-cyan-400/[0.06]"
                  />
                </FormField>

                {/* =================================================
                    BOTÓN ENVIAR
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
                  className="flex min-h-[52px] w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-3 text-center font-mono text-[8px] font-bold tracking-[0.07em] whitespace-normal text-[#07111b] uppercase shadow-[0_12px_35px_rgba(34,211,238,0.15)] transition hover:shadow-[0_16px_40px_rgba(34,211,238,0.22)] disabled:cursor-not-allowed disabled:opacity-50 min-[360px]:text-[9px] sm:min-h-[56px] sm:gap-3 sm:px-6 sm:text-[10px] sm:tracking-[0.12em]"
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
                    className="flex min-w-0 items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-3 text-[11px] leading-5 text-emerald-700 sm:px-4 sm:text-[12px] dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-emerald-300"
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
                  <div className="max-w-full rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-[11px] leading-5 break-words text-red-700 sm:px-4 sm:text-[12px] dark:border-red-400/20 dark:bg-red-400/[0.05] dark:text-red-300">
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
        <p className="mt-2 max-w-full text-[10px] leading-5 break-words text-red-600 sm:text-[11px] dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
