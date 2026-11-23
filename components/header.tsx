import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand: logo pegado al wordmark "Stay" */}
        <Link href="/" className="group flex items-center" aria-label="SevenStay">
          <Image
            src="/LOGO.png"
            alt="SevenStay"
            width={40}
            height={40}
            priority
            className="h-10 w-auto"
          />
          <span className="ml-1 font-wordmark text-2xl leading-none tracking-tight text-foreground">
            Stay
          </span>
        </Link>

        {/* Actions */}
        <nav className="flex items-center gap-3">
          <Link
            href="/acceso"
            className="underline-draw px-3 py-2 font-sans text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Acceso
          </Link>

          <Button
            asChild
            size="sm"
            className="btn-step h-9 rounded-full px-5 font-sans text-sm"
          >
            <Link href="https://wa.me/50495197142?text=Hola%2C%20quiero%20una%20demo%20de%2015%20min%20de%20Seven%20Stay">
              Solicitar Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-160 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}