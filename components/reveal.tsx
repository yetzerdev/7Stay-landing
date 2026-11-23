"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";

/**
 * Marca su contenedor con data-inview="true" la primera vez que entra en
 * pantalla. Los hijos con la clase `.rv` (ver globals.css) se animan en ese
 * momento, cada uno con su retardo en la variable CSS --d.
 */
export function Reveal({
  children,
  className = "",
  threshold = 0.25,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} data-inview={inView} className={className} {...rest}>
      {children}
    </Tag>
  );
}

