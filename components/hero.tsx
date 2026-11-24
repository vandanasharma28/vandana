import { ArrowRight, MapPin } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center md:py-36">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {site.location}
        </p>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {"Hi, I'm "}
          <span className="text-primary">{site.name}</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-muted-foreground md:text-2xl">
          {site.role}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#project"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
          >
            View My Work
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-7 font-semibold text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
          >
            {"Let's Connect"}
          </a>
        </div>
      </div>
    </section>
  )
}
