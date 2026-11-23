import type React from "react";
import {
  AlertTriangle,
  BellRing,
  CheckCheck,
  Clock3,
  Coffee,
  DoorOpen,
  HelpCircle,
  Inbox,
  MapPin,
  Ticket,
  Wifi,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { d } from "@/lib/motion";

type Feature = {
  title: string;
  body: string;
  visual: (base: number) => React.ReactNode;
  span: string;
};

const FEATURES: Feature[] = [
  {
    title: "Menos llamadas repetitivas al mostrador",
    body: "La contraseña del Wi-Fi, los horarios de desayuno, el check-out y las preguntas frecuentes están a un toque. Tu recepción se concentra en dar la bienvenida y en la hospitalidad real.",
    visual: (b) => <QuickInfoVisual base={b} />,
    span: "lg:col-span-5",
  },
  {
    title: "Alertas de servicio antes del check-out",
    body: "Si un aire acondicionado gotea o un pedido pasa de 15 minutos, gerencia recibe una notificación para resolverlo antes de que se convierta en una reseña negativa.",
    visual: (b) => <EscalationVisual base={b} />,
    span: "lg:col-span-7",
  },
  {
    title: "Ingresos por tours aliados y gastronomía",
    body: "Un catálogo visual curado por tu hotel, con vouchers auditables que aseguran tus comisiones con operadores de Roatán, Tela y La Ceiba.",
    visual: (b) => <ToursVisual base={b} />,
    span: "lg:col-span-7",
  },
  {
    title: "Si tu personal sabe usar WhatsApp, ya domina Seven Stay",
    body: "Sin paneles complejos ni contraseñas que olvidar. Camareras, botones y mantenimiento reciben sus tareas en la aplicación que ya usan a diario.",
    visual: (b) => <ChatVisual base={b} />,
    span: "lg:col-span-5",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="scroll-mt-20 px-6 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="rv max-w-[22ch] text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
          Descubre nuestras características más destacadas.
        </Reveal>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-12">
          {FEATURES.map((f, i) => {
            const base = (i % 2) * 140;
            return (
            <Reveal
              as="article"
              threshold={0.2}
              key={f.title}
              style={d(base)}
              className={`rv flex flex-col overflow-hidden rounded-3xl border border-surface-200 bg-white ${f.span}`}
            >
              <div className="p-7 sm:p-8">
                <h3 className="max-w-[26ch] text-balance font-sans text-xl font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-pretty font-sans text-base leading-relaxed text-foreground/60">
                  {f.body}
                </p>
              </div>
              <div className="flex min-h-72 flex-1 items-center justify-center border-t border-surface-100 bg-surface-50 p-6 sm:p-8">
                {f.visual(base + 200)}
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 1. Información a un toque ---------------- */

function QuickInfoVisual({ base }: { base: number }) {
  const rows = [
    { icon: Wifi, label: "Wi-Fi", value: "Copiar clave" },
    { icon: Coffee, label: "Desayuno", value: "6:30 a 10:00" },
    { icon: DoorOpen, label: "Check-out", value: "12:00 m." },
    { icon: HelpCircle, label: "Preguntas frecuentes", value: "8 temas" },
  ];
  return (
    <ul style={d(base)} className="rv rv-pop loop-float-sm w-full max-w-[19rem] divide-y divide-surface-100 overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-soft">
      {rows.map(({ icon: Icon, label, value }, k) => (
        <li
          key={label}
          style={d(base + 150 + k * 90)}
          className="rv rv-left flex items-center gap-3 px-4 py-3"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-100">
            <Icon className="h-4 w-4 text-foreground" />
          </span>
          <span className="font-sans text-sm font-semibold text-foreground">{label}</span>
          <span className="ml-auto whitespace-nowrap font-sans text-xs text-foreground/55">{value}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- 2. Escalamiento a gerencia ---------------- */

function EscalationVisual({ base }: { base: number }) {
  const steps = [
    {
      icon: Inbox,
      time: "0:00",
      title: "Solicitud recibida",
      detail: "Hab. 312: el aire acondicionado gotea",
      tone: "neutral",
    },
    {
      icon: Clock3,
      time: "15:00",
      title: "Sin respuesta en 15 minutos",
      detail: "El encargado en turno no la ha aceptado",
      tone: "warn",
    },
    {
      icon: BellRing,
      time: "15:01",
      title: "Escalado a gerencia",
      detail: "Gerencia recibe el aviso por WhatsApp",
      tone: "alert",
    },
  ] as const;

  const toneDot = {
    neutral: "bg-foreground text-background",
    warn: "bg-amber-400 text-foreground",
    alert: "bg-red-500 text-white",
  };

  return (
    <ol className="relative w-full max-w-[26rem]">
      <span
        aria-hidden
        style={d(base + 150)}
        className="rv rv-draw-y absolute top-5 bottom-5 left-[1.2rem] border-l border-dashed border-foreground/20"
      />
      {steps.map(({ icon: Icon, time, title, detail, tone }, i) => (
        <li
          key={title}
          style={d(base + 100 + i * 450)}
          className={`rv rv-left relative flex gap-4 ${i > 0 ? "mt-4" : ""}`}
        >
          <span
            className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-surface-50 ${toneDot[tone]} ${
              tone === "alert" ? "loop-pulse [--pulse:rgb(239_68_68/0.45)]" : ""
            }`}
          >
            <Icon className="h-4 w-4" />
          </span>
          <div
            className={`flex-1 rounded-2xl border bg-white px-4 py-3 ${
              tone === "alert" ? "border-red-200" : "border-surface-200"
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-sans text-sm font-semibold text-foreground">
                <span className="mr-1.5 text-foreground/40">{i + 1}.</span>
                {title}
              </p>
              <span className="font-sans text-xs tabular-nums text-foreground/45">{time}</span>
            </div>
            <p className="mt-0.5 font-sans text-xs text-foreground/55">{detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- 3. Tours aliados con voucher ---------------- */

function ToursVisual({ base }: { base: number }) {
  const tours = [
    {
      name: "Río Cangrejal",
      kind: "Rafting y senderismo",
      place: "La Ceiba",
      price: "US$ 65",
      code: "SS-CGJ-4821",
      art: "from-[#2f6b4f] via-[#4c8c63] to-[#9cc58f]",
    },
    {
      name: "Cayos Cochinos",
      kind: "Snorkel y playa",
      place: "Salida desde La Ceiba",
      price: "US$ 90",
      code: "SS-CCH-1937",
      art: "from-[#0e6f8f] via-[#2aa6b8] to-[#9fe0dc]",
    },
  ];
  return (
    <div className="grid w-full max-w-[34rem] gap-4 sm:grid-cols-2">
      {tours.map((t, k) => (
        <div
          key={t.code}
          style={{ ...d(base + k * 140), animationDelay: `${-k * 2.6}s` }}
          className="rv loop-float-sm overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-soft"
        >
          <div className={`relative h-24 bg-gradient-to-br ${t.art}`}>
            <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2 py-0.5 font-sans text-[10px] font-semibold text-foreground">
              {t.kind}
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-sans text-sm font-semibold text-foreground">{t.name}</p>
              <p className="font-sans text-xs font-semibold text-foreground">{t.price}</p>
            </div>
            <p className="mt-1 flex items-center gap-1 font-sans text-xs text-foreground/55">
              <MapPin className="h-3 w-3" /> {t.place}
            </p>
            <div
              style={d(base + 500 + k * 140)}
              className="rv rv-left mt-3 flex items-center justify-between rounded-lg border border-dashed border-foreground/25 px-2.5 py-1.5">
              <span className="flex items-center gap-1.5 font-sans text-[11px] text-foreground/60">
                <Ticket className="h-3.5 w-3.5" /> Reserva
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-wide text-foreground">
                {t.code}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- 4. Conversación de WhatsApp ---------------- */

function ChatVisual({ base }: { base: number }) {
  return (
    <div
      style={d(base)}
      className="rv rv-pop loop-float-sm w-full max-w-[20rem] overflow-hidden rounded-2xl border border-surface-200 shadow-soft"
    >
      <div className="flex items-center gap-2.5 bg-[#075E54] px-4 py-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white font-sans text-[10px] font-bold text-[#075E54]">
          7S
        </span>
        <div className="leading-tight">
          <p className="font-sans text-xs font-semibold text-white">Seven Stay</p>
          <p className="font-sans text-[10px] text-white/70">en línea</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-[#EFEAE2] px-3 py-4">
        {/* Solicitud nueva */}
        <div style={d(base + 350)} className="rv rv-bubble-in max-w-[85%] rounded-xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
          <p className="flex items-center gap-1.5 font-sans text-xs font-semibold text-foreground">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
            Nueva solicitud
          </p>
          <p className="mt-1 font-sans text-xs text-foreground/75">
            Hab. 204: 2 toallas extra
          </p>
          <div className="mt-2 grid grid-cols-2 gap-1 border-t border-surface-100 pt-1.5">
            <span className="text-center font-sans text-[11px] font-semibold text-[#128C7E]">
              Aceptar
            </span>
            <span className="text-center font-sans text-[11px] font-semibold text-[#128C7E]">
              Rechazar
            </span>
          </div>
          <p className="mt-1 text-right font-sans text-[9px] text-foreground/40">9:41</p>
        </div>

        {/* Respuesta del personal */}
        <div style={d(base + 1050)} className="rv rv-bubble-out ml-auto max-w-[70%] rounded-xl rounded-tr-sm bg-[#D9FDD3] px-3 py-2 shadow-sm">
          <p className="font-sans text-xs text-foreground">Aceptar</p>
          <p className="mt-0.5 flex items-center justify-end gap-1 font-sans text-[9px] text-foreground/40">
            9:42 <CheckCheck className="h-3 w-3 text-[#53BDEB]" />
          </p>
        </div>

        {/* Confirmación */}
        <div style={d(base + 1650)} className="rv rv-bubble-in max-w-[85%] rounded-xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
          <p className="font-sans text-xs font-semibold text-foreground">Solicitud aceptada</p>
          <p className="mt-0.5 font-sans text-xs text-foreground/65">
            Le avisamos al huésped que vas en camino.
          </p>
          <p className="mt-1 text-right font-sans text-[9px] text-foreground/40">9:42</p>
        </div>
      </div>
    </div>
  );
}
