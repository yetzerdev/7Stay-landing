import Image from "next/image";
import { Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { d } from "@/lib/motion";

const WHATSAPP_URL =
  "https://wa.me/50495197142?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20del%20Programa%20de%20Hoteles%20Fundadores%20de%20Seven%20Stay";
const EMAIL = "yetzer@spacehn.com";
const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Programa de Hoteles Fundadores - Seven Stay"
)}`;

export function Founders() {
  return (
    <section id="fundadores" className="scroll-mt-20 px-4 pb-28 sm:px-6 sm:pb-36">
      <Reveal
        threshold={0.2}
        className="rv mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-[2rem] border border-surface-200 bg-white px-6 py-14 shadow-soft sm:px-12 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 lg:px-16 lg:py-20"
      >
        <div>
          <h2
            style={d(120)}
            className="rv max-w-[16ch] text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl"
          >
            Programa de Hoteles Fundadores
          </h2>
          <p
            style={d(220)}
            className="rv mt-6 max-w-[50ch] text-pretty font-sans text-lg leading-relaxed text-foreground/60"
          >
            Súmate como uno de los primeros hoteles en usar Seven Stay. Trabajamos
            de cerca contigo en la puesta en marcha, y lo que tu equipo nos cuente
            da forma a lo que construimos después.
          </p>

          <div style={d(320)} className="rv mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-step inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-foreground px-6 font-sans text-base font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <WhatsAppLogo className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
            <a
              href={EMAIL_URL}
              className="btn-step inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-foreground/15 bg-white px-6 font-sans text-base font-medium text-foreground transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Mail aria-hidden className="h-5 w-5" />
              {EMAIL}
            </a>
          </div>
        </div>

        <div style={d(260)} className="rv rv-pop flex justify-center lg:justify-end">
          <FounderSeal className="h-56 w-56 sm:h-64 sm:w-64" />
        </div>
      </Reveal>
    </section>
  );
}

/* Sello giratorio con el logo al centro */
export function FounderSeal({
  className = "",
  id = "seal-path",
}: {
  className?: string;
  id?: string;
}) {
  const text = "HOTEL FUNDADOR — SEVEN STAY — HONDURAS — ";
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="loop-spin absolute inset-0 h-full w-full text-foreground"
        aria-hidden
      >
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeOpacity="0.12" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeOpacity="0.12" />
        <text
          className="font-sans"
          fontSize="13"
          fontWeight="600"
          letterSpacing="3.2"
          fill="currentColor"
        >
          <textPath href={`#${id}`}>{text + text.slice(0, 18)}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-foreground">
        <Image
          src="/LOGO.png"
          alt="Seven Stay"
          width={64}
          height={64}
          className="h-1/2 w-auto invert"
        />
      </div>
    </div>
  );
}

/* Isotipo oficial de WhatsApp */
function WhatsAppLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#25D366" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
