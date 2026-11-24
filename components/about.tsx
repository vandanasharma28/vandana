import { BookOpen, Sparkles } from 'lucide-react'
import { Section } from './section'

const highlights = [
  { icon: BookOpen, title: 'Always learning', text: 'Building skills one project at a time.' },
  { icon: Sparkles, title: 'Clean design', text: 'Simple, readable, and user-friendly pages.' },
]

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A little about me">
      <div className="grid gap-10 md:grid-cols-5">
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:col-span-3">
          I am learning web development and building my first projects. I love creating clean and
          simple websites.
        </p>
        <ul className="flex flex-col gap-4 md:col-span-2">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-xl border border-border p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
