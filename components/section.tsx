import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, eyebrow, title, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('scroll-mt-16 py-20 md:py-28', className)}>
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
