"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  initialValue?: number;
}

export function PageWrapper({ children, initialValue = 0 }: PageWrapperProps) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter((c) => c + 1);
  const decrement = () => setCounter((c) => Math.max(0, c - 1));

  return (
    <div className="relative min-h-screen w-full bg-background" style={{ backgroundColor: '#ffffff' }}>
      {children}
      <aside className="fixed inset-y-0 right-0 z-50 flex w-16 flex-col items-center justify-center border-l border-border/60 bg-background/90 backdrop-blur-md py-6 shadow-lg">
        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <button
            onClick={decrement}
            className="h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-160 [transition-timing-function:var(--ease-out)] active:scale-95"
            aria-label="Decrement"
          >
            <span className="text-xl font-bold">−</span>
          </button>

          <div className="h-12 w-12 rounded-full border border-border/60 bg-secondary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-foreground/90 tabular-nums select-none">
              {counter}
            </span>
          </div>

          <button
            onClick={increment}
            className="h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-160 [transition-timing-function:var(--ease-out)] active:scale-95"
            aria-label="Increment"
          >
            <span className="text-xl font-bold">+</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
