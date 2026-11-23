import type React from "react";
import {
  Camera,
  Check,
  CheckCheck,
  Clock3,
  Map as MapIcon,
  Nfc,
  QrCode,
  Smartphone,
  Wifi,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { d } from "@/lib/motion";

type Step = {
  title: string;
  body: string;
  visual: (base: number) => React.ReactNode;
};

const STEPS: Step[] = [
  {
    title: "Acerca o escanea",
    body: "El huésped acerca su smartphone a la placa del velador, por chip NFC o código QR. Abre en menos de un segundo y sin descargas.",
    visual: (b) => <ScanVisual base={b} />,
  },
  {
    title: "Pide lo que necesita",
    body: "Wi-Fi en un toque, toallas extra, reportar una falla con foto o explorar tours con reserva directa.",
    visual: (b) => <RequestVisual base={b} />,
  },
  {
    title: "Tu equipo responde por WhatsApp",
    body: "El aviso llega al WhatsApp del encargado en turno, con botones para aceptar y marcar como resuelto. Recepción sigue los tiempos de respuesta en vivo.",
    visual: (b) => <WhatsAppVisual base={b} />,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 px-6 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <h2 className="rv max-w-[20ch] text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            Del escaneo a la solución en tres simples pasos.
          </h2>
          <p style={d(120)} className="rv max-w-[46ch] text-pretty font-sans text-lg leading-relaxed text-foreground/60">
            Sin barreras técnicas. El huésped solo escanea y tu equipo responde
            desde la herramienta que ya tiene en su bolsillo.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-14 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {/* Línea que une los pasos (solo escritorio) */}
          <Reveal
            as="span"
            aria-hidden
            className="absolute top-5 right-[calc(33.333%-1rem)] left-5 hidden lg:block"
          >
            <span
              style={d(150)}
              className="rv rv-draw-x block border-t border-dashed border-foreground/20"
            />
          </Reveal>

          {STEPS.map((step, i) => {
            const base = i * 180;
            return (
              <Reveal
                as="li"
                threshold={0.2}
                key={step.title}
                className="relative flex flex-col"
              >
              <span style={d(base)} className="rv rv-pop relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground font-sans text-sm font-semibold text-background ring-8 ring-white">
                {i + 1}
              </span>

              <h3 style={d(base + 80)} className="rv mt-6 font-sans text-xl font-semibold tracking-[-0.01em] text-foreground">
                {step.title}
              </h3>
              <p style={d(base + 140)} className="rv mt-3 max-w-[38ch] text-pretty font-sans text-base leading-relaxed text-foreground/60">
                {step.body}
              </p>

              <div style={d(base + 200)} className="rv mt-8 flex h-64 items-center justify-center overflow-hidden rounded-3xl border border-surface-200 bg-surface-50 p-6 lg:mt-auto">
                {step.visual(base + 200)}
              </div>
              </Reveal>
            );
          })}
        </ol>

        <Compatibility />
      </div>
    </section>
  );
}

/* ---------- Ilustraciones de cada paso (HTML/CSS, sin imágenes) ---------- */

function ScanVisual({ base }: { base: number }) {
  return (
    <div className="flex items-end gap-5">
      {/* Placa de acrílico y madera */}
      <div style={d(base + 150)} className="rv rv-pop relative flex flex-col items-center">
        {/* Pulsos NFC cuando el teléfono toca la placa */}
        <span
          aria-hidden
          style={d(base + 950)}
          className="rv-ping loop-ping absolute top-0 left-2 h-32 w-24 rounded-xl border-2 border-foreground/40"
        />
        <div className="flex h-32 w-24 flex-col items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/80 shadow-soft backdrop-blur">
          <QrCode className="h-11 w-11 text-foreground" strokeWidth={1.5} />
          <span className="flex items-center gap-1 font-sans text-[10px] font-semibold text-foreground/60">
            <Nfc className="h-3 w-3" /> NFC
          </span>
        </div>
        <div className="h-3 w-28 rounded-b-md bg-[#b98a5e]" />
      </div>

      {/* Teléfono acercándose */}
      <div
        style={d(base + 450)}
        className="rv rv-phone loop-tap relative mb-6 flex h-36 w-[4.5rem] -rotate-12 flex-col items-center justify-center gap-2 rounded-[1.1rem] border-[3px] border-foreground bg-white">
        <span className="absolute top-1.5 h-1.5 w-6 rounded-full bg-foreground" />
        <Smartphone className="h-5 w-5 text-foreground/70" />
        <span
          style={d(base + 1000)}
          className="rv font-sans text-[9px] font-semibold text-foreground/60"
        >
          &lt; 1 s
        </span>
      </div>
    </div>
  );
}

/* Logos oficiales (marcas de Apple y Google) */
function AppleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function AndroidLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#3DDC84" aria-hidden>
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.463 11.463 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" />
    </svg>
  );
}

function Compatibility() {
  return (
    <Reveal className="relative mt-16 flex flex-col items-center gap-4 pt-10 sm:flex-row sm:justify-center sm:gap-6">
      <span
        aria-hidden
        className="rv rv-draw-x absolute inset-x-0 top-0 border-t border-surface-200"
      />
      <p style={d(150)} className="rv font-sans text-base font-medium text-foreground/70">
        Compatible con iOS y Android
      </p>
      <div className="flex items-center gap-3">
        <span
          style={d(250)}
          className="rv rv-pop inline-flex h-11 items-center gap-2 rounded-full border border-surface-200 bg-white px-4 font-sans text-sm font-semibold text-foreground"
        >
          <AppleLogo className="h-5 w-5" />
          iOS
        </span>
        <span
          style={d(330)}
          className="rv rv-pop inline-flex h-11 items-center gap-2 rounded-full border border-surface-200 bg-white px-4 font-sans text-sm font-semibold text-foreground"
        >
          <AndroidLogo className="h-5 w-5" />
          Android
        </span>
      </div>
    </Reveal>
  );
}

function RequestVisual({ base }: { base: number }) {
  const items = [
    { icon: Wifi, label: "Wi-Fi", active: false },
    { icon: Check, label: "Toallas extra", active: true },
    { icon: Wrench, label: "Reportar falla", active: false, extra: Camera },
    { icon: MapIcon, label: "Tours", active: false },
  ];
  return (
    <div className="grid w-full max-w-[16rem] grid-cols-2 gap-2.5">
      {items.map(({ icon: Icon, label, active, extra: Extra }, k) => (
        <div key={label} style={d(base + 150 + k * 70)} className="rv rv-pop">
        <div
          style={active ? d(base + 900) : undefined}
          className={`flex h-full flex-col gap-3 rounded-2xl border p-3 ${active ? "rv-select loop-press " : ""}${
            active
              ? "border-foreground bg-foreground text-background"
              : "border-surface-200 bg-white text-foreground"
          }`}
        >
          <span className="flex items-center justify-between">
            <Icon className="h-4 w-4" />
            {Extra ? <Extra className="h-3.5 w-3.5 opacity-50" /> : null}
          </span>
          <span className="font-sans text-xs font-semibold leading-tight">{label}</span>
        </div>
        </div>
      ))}
    </div>
  );
}

function WhatsAppVisual({ base }: { base: number }) {
  return (
    <div className="w-full max-w-[16.5rem]">
      <div style={d(base + 150)} className="rv mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] font-sans text-[10px] font-bold text-white">
          7S
        </span>
        <span className="font-sans text-xs font-semibold text-foreground">Seven Stay</span>
        <span className="ml-auto flex items-center gap-1.5 font-sans text-[10px] text-foreground/45">
          <span className="loop-pulse h-1.5 w-1.5 rounded-full bg-[#25D366] [--pulse:rgb(37_211_102/0.5)]" />
          ahora
        </span>
      </div>

      <div
        style={d(base + 400)}
        className="rv rv-bubble-in loop-float-sm rounded-2xl rounded-tl-sm bg-white p-3 shadow-soft"
      >
        <p className="font-sans text-[13px] font-semibold text-foreground">
          Toallas extra para la hab. 204
        </p>
        <p className="mt-0.5 font-sans text-xs text-foreground/55">
          Solicitado por el huésped hace 12 s
        </p>
        <div className="mt-3 grid grid-cols-2 gap-1.5 border-t border-surface-100 pt-2.5">
          <span className="rounded-lg bg-surface-50 py-1.5 text-center font-sans text-xs font-semibold text-[#128C7E]">
            Aceptar
          </span>
          <span className="rounded-lg bg-surface-50 py-1.5 text-center font-sans text-xs font-semibold text-[#128C7E]">
            Marcar resuelto
          </span>
        </div>
      </div>

      <div style={d(base + 800)} className="rv mt-3 flex items-center justify-between rounded-xl border border-surface-200 bg-white px-3 py-2">
        <span className="flex items-center gap-1.5 font-sans text-[11px] font-medium text-foreground/70">
          <Clock3 className="h-3.5 w-3.5" /> Respuesta promedio
        </span>
        <span className="flex items-center gap-1 font-sans text-[11px] font-semibold text-foreground">
          2:40 min <CheckCheck className="h-3.5 w-3.5 text-[#34B7F1]" />
        </span>
      </div>
    </div>
  );
}
