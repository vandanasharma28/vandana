import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site'
import { Section } from './section'

const tags = ['HTML', 'CSS', 'JavaScript']

export function Project() {
  return (
    <Section id="project" eyebrow="My First Project" title="Featured work">
      <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid md:grid-cols-2">
        <div className="flex items-center justify-center bg-gradient-to-br from-primary to-[oklch(0.42_0.2_293)] p-8 md:p-10">
          <div aria-hidden="true" className="w-full max-w-sm rounded-xl bg-background p-4 shadow-2xl">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
            </div>
            <div className="mt-5 space-y-2.5">
              <div className="h-3 w-1/2 rounded bg-primary" />
              <div className="h-2 w-3/4 rounded bg-accent" />
              <div className="h-2 w-2/3 rounded bg-accent" />
              <div className="mt-4 h-6 w-24 rounded-full bg-primary/80" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-lg bg-muted" />
              <div className="h-12 rounded-lg bg-muted" />
              <div className="h-12 rounded-lg bg-muted" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <h3 className="text-2xl font-bold tracking-tight">My Personal Portfolio Website</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            A clean, responsive one-page site introducing who I am, the skills I&apos;m learning,
            and how to get in touch.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 self-start font-semibold text-primary hover:underline"
          >
            View on GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </article>
    </Section>
  )
}
