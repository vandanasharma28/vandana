import { Braces, FileCode2, GitBranch, Palette } from 'lucide-react'
import { Section } from './section'

const skills = [
  { name: 'HTML', icon: FileCode2, text: 'Semantic page structure' },
  { name: 'CSS', icon: Palette, text: 'Layouts and responsive styling' },
  { name: 'JavaScript', icon: Braces, text: 'Interactivity and logic' },
  { name: 'GitHub', icon: GitBranch, text: 'Version control and sharing' },
]

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with" className="bg-muted">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ name, icon: Icon, text }) => (
          <li
            key={name}
            className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
