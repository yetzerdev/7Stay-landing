import type React from "react";

const SIZE = 25;

// QR ilustrativo: patrones de posición reales + módulos pseudoaleatorios estables
// (no escaneable; reemplazar por un QR real cuando exista la URL definitiva).
function buildModules() {
  let seed = 7;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x >= SIZE - 8 && y < 8) || (x < 8 && y >= SIZE - 8);

  const cells: string[] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (inFinder(x, y)) continue;
      const timing = (x === 6 || y === 6) && (x + y) % 2 === 0;
      if (timing || rand() > 0.52) cells.push(`M${x} ${y}h1v1h-1z`);
    }
  }
  return cells.join("");
}

const MODULES = buildModules();

function Finder({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0h7v7h-7zM1 1v5h5v-5z" fillRule="evenodd" />
      <rect x="2" y="2" width="3" height="3" />
    </g>
  );
}

export function QrCard({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`flex items-center gap-4 rounded-2xl border border-surface-200 bg-white/95 p-3 pr-5 shadow-float backdrop-blur-sm ${className}`}
    >
      <svg
        viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`}
        className="h-16 w-16 shrink-0 rounded-lg bg-white text-foreground"
        fill="currentColor"
        shapeRendering="crispEdges"
        role="img"
        aria-label="Código QR de la placa de la habitación"
      >
        <path d={MODULES} />
        <Finder x={0} y={0} />
        <Finder x={SIZE - 7} y={0} />
        <Finder x={0} y={SIZE - 7} />
      </svg>

      <div className="flex flex-col items-start gap-1.5">
        <span className="rounded-full bg-foreground px-2 py-0.5 font-sans text-[11px] font-semibold leading-4 text-background">
          NFC + QR
        </span>
        <p className="font-sans text-sm font-semibold leading-tight text-foreground">
          Placa en la habitación
        </p>
        <p className="font-sans text-xs leading-tight text-foreground/60">
          Acercas o escaneas
        </p>
      </div>
    </div>
  );
}
