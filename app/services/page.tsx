// Services page

export default function Services() {
  return (
    <div className="relative min-h-screen bg-white">

      {/* Hero section */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-5xl font-normal tracking-tight text-foreground">
            Nuestros Servicios
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Soluciones completas para impulsar tu negocio hacia el éxito digital
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl">📊</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Consultoría Tecnológica</h3>
            <p className="text-foreground/60 leading-relaxed">
              Análisis estratégico de su negocio y diagnóstico tecnológico para identificar oportunidades de mejora y optimización.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl">💻</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Desarrollo de Software</h3>
            <p className="text-foreground/60 leading-relaxed">
              Aplicaciones web y móviles a medida, utilizando las tecnologías más avanzadas para garantizar escalabilidad y rendimiento.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl">🎨</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Diseño UI/UX</h3>
            <p className="text-foreground/60 leading-relaxed">
              Experiencias de usuario intuitivas y atractivas que aumentan la conversión y la satisfacción del cliente.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl">🔍</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Auditoría SEO</h3>
            <p className="text-foreground/60 leading-relaxed">
              Optimización completa para motores de búsqueda y mejora del posicionamiento en los resultados orgánicos.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Optimización de Performance</h3>
            <p className="text-foreground/60 leading-relaxed">
              Mejora la velocidad de carga y rendimiento de su sitio web, mejorando la experiencia del usuario y SEO.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl">📱</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Marketing Digital</h3>
            <p className="text-foreground/60 leading-relaxed">
              Estrategias integradas de marketing digital para aumentar su presencia online y generar leads cualificados.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">¿Listo para transformar su negocio?</h2>
          <p className="mb-8 text-lg text-foreground/60">
            Contáctenos hoy mismo y comience a ver resultados en 24 horas.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-step rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm transition-all">
              Agendar Demo Gratis
            </button>
            <a href="https://seven-stay.vercel.app/panel/login" className="inline-flex items-center rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-accent">
              Ver Planes
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}