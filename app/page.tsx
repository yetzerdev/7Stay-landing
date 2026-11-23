import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Features } from "@/components/features";
import { Founders } from "@/components/founders";
import { HowItWorks } from "@/components/how-it-works";
import { QrCard } from "@/components/qr-card";
import { Reveal } from "@/components/reveal";
import { d } from "@/lib/motion";

const DEMO_URL =
  "https://wa.me/50495197142?text=Hola%2C%20quiero%20una%20demo%20de%2015%20min%20de%20Seven%20Stay";

const FEATURES = [
  { value: "0 Apps", label: "Sin descargas ni registros" },
  { value: "Directo", label: "Aviso inmediato a WhatsApp" },
  { value: "NFC + QR", label: "Doble acceso por habitación" },
  { value: "24 / 7", label: "Disponible toda la estadía" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <section className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-6 pt-28 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-20 lg:pb-12">
        <div>
          <h1 className="hero-in max-w-[16ch] text-balance font-sans text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl xl:text-7xl">
            Atención personalizada y sin esperas en cada habitación.
          </h1>

          <p
            className="hero-in mt-7 max-w-[58ch] text-pretty font-sans text-lg leading-relaxed text-foreground/65 sm:text-xl"
            style={{ animationDelay: "90ms" }}
          >
            Con solo escanear una elegante placa de acrílico y madera, tus huéspedes
            acceden al Wi-Fi, solicitan toallas, reportan incidencias o reservan
            tours. Todo sin instalar aplicaciones y conectado directo al WhatsApp de
            tu personal.
          </p>

          <div className="hero-in mt-10" style={{ animationDelay: "180ms" }}>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-step inline-flex h-12 items-center rounded-full bg-primary px-7 font-sans text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Solicitar demo de 15 min
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-fit lg:mx-0 lg:-mr-4 lg:justify-self-end xl:-mr-24">
          <div className="loop-float">
          <Image
            src="/MOCKUPS.png"
            alt="Pantalla de Seven Stay en el celular de un huésped: Wi-Fi, limpieza, reportar falla, tours y menú"
            width={1857}
            height={3096}
            priority
            sizes="(min-width: 1024px) 560px, 85vw"
            className="hero-in h-auto w-[min(78vw,26rem)] lg:h-[min(86svh,820px)] lg:w-auto lg:max-w-none"
            style={{ animationDelay: "240ms" }}
          />
          </div>
          <div className="loop-float-sm absolute top-[6%] -left-6 sm:-left-20 lg:-left-12 xl:-left-36">
            <QrCard className="hero-in" style={{ animationDelay: "420ms" }} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <Reveal
          threshold={0.2}
          className="rv mx-auto max-w-6xl rounded-[2rem] bg-black px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <h2 style={d(120)} className="rv max-w-[18ch] text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Atención ágil y moderna, sin complicar tu operación.
            </h2>
            <p style={d(220)} className="rv max-w-[48ch] text-pretty font-sans text-base leading-relaxed text-white/65 sm:text-lg">
              Facilita la comunicación entre tus huéspedes y tu recepción. Funciona
              al instante en cualquier smartphone, sin sistemas pesados ni curvas de
              aprendizaje para tu equipo.
            </p>
          </div>

          <dl className="relative mt-14 grid grid-cols-2 lg:mt-20 lg:grid-cols-4">
            <span
              aria-hidden
              style={d(300)}
              className="rv rv-draw-x absolute inset-x-0 top-0 border-t border-white/15"
            />
            {FEATURES.map((f, i) => (
              <div
                key={f.value}
                style={d(380 + i * 90)}
                className={`rv flex flex-col gap-2 pt-8 pb-2 ${i % 2 === 1 ? "pl-6" : "pr-6"} ${
                  i > 1 ? "mt-6 lg:mt-0" : ""
                } lg:px-6 ${i === 0 ? "lg:pl-0" : ""} ${i === FEATURES.length - 1 ? "lg:pr-0" : ""} ${
                  i > 0 ? "lg:border-l lg:border-white/15" : ""
                } ${i % 2 === 1 ? "border-l border-white/15" : ""}`}
              >
                <dt className="order-2 font-sans text-sm leading-snug text-white/60">
                  {f.label}
                </dt>
                <dd className="order-1 whitespace-nowrap font-sans text-3xl font-semibold tracking-[-0.03em] sm:text-4xl xl:text-[2.75rem]">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="rv text-balance font-sans text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            <span style={d(0)} className="rv rv-pop mr-[0.25em] inline-flex items-center whitespace-nowrap align-[-0.12em]">
              <Image
                src="/LOGO.png"
                alt="Seven"
                width={40}
                height={40}
                className="h-[0.95em] w-auto"
              />
              <span className="ml-[0.06em] font-wordmark font-normal tracking-wide">
                STAY
              </span>
            </span>
            es la solución integral para transformar la estadía y agilizar tu
            operación.
          </h2>

          <p style={d(140)} className="rv mt-8 max-w-[52ch] text-pretty font-sans text-lg leading-relaxed text-foreground/60 sm:text-xl">
            Experimenta la tranquilidad de saber que cada solicitud de tu huésped
            llega al empleado correcto en segundos, sin intermediarios ni demoras.
          </p>

          <div style={d(240)} className="rv mt-10">
          <Link
            href="#como-funciona"
            className="btn-step group inline-flex h-12 items-center gap-2 rounded-full border border-foreground/15 bg-white px-6 font-sans text-base font-medium text-foreground transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Ver cómo funciona
            <ArrowDown
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-y-0.5"
            />
          </Link>
          </div>
        </Reveal>
      </section>

      <HowItWorks />

      <Features />

      <Founders />
    </main>

  );
}
