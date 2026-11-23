import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { d } from "@/lib/motion";

const WHATSAPP_URL =
  "https://wa.me/50495197142?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20de%20Seven%20Stay";
const EMAIL = "yetzer@spacehn.com";

const NAV = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#fundadores", label: "Hoteles Fundadores" },
  { href: "/acceso", label: "Acceso" },
];

const CONTACT = [
  { href: WHATSAPP_URL, label: "WhatsApp", external: true },
  { href: `mailto:${EMAIL}`, label: EMAIL, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-white">
      <Reveal threshold={0.1} className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div style={d(0)} className="rv">
            <Link href="/" className="inline-flex items-center" aria-label="Seven Stay, inicio">
              <Image src="/LOGO.png" alt="" width={36} height={36} className="h-9 w-auto" />
              <span className="ml-1 font-wordmark text-2xl leading-none tracking-wide text-foreground">
                STAY
              </span>
            </Link>
            <p className="mt-5 max-w-[34ch] font-sans text-sm leading-relaxed text-foreground/60">
              Atención para huéspedes desde la habitación, conectada directo al
              WhatsApp de tu personal.
            </p>
          </div>

          <nav style={d(100)} className="rv" aria-label="Secciones">
            <p className="font-sans text-sm font-semibold text-foreground">Producto</p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="underline-draw font-sans text-sm text-foreground/60 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div style={d(200)} className="rv">
            <p className="font-sans text-sm font-semibold text-foreground">Contacto</p>
            <ul className="mt-4 flex flex-col gap-3">
              {CONTACT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="underline-draw font-sans text-sm text-foreground/60 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={d(250)}
          className="rv mt-16 flex flex-col gap-2 border-t border-surface-200 py-6 font-sans text-xs text-foreground/50 sm:flex-row sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Seven Stay. Todos los derechos reservados.</p>
          <a href="#top" className="underline-draw self-start hover:text-foreground sm:self-auto">
            Volver arriba
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
