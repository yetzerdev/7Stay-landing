import type React from "react";

/** Retardo de la animación de scroll (.rv): style={d(120)} */
export const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
