import { BriefcaseBusiness as Linkedin, GitBranch, Mail, MapPin } from 'lucide-react'
import { site } from '@/lib/site'

const links = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: 'GitHub', value: 'View my code', href: site.github, icon: GitBranch, external: true },
  { label: 'LinkedIn', value: 'Connect with me', href: site.linkedin, icon: Linkedin, external: true },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/75">
          Contact
        </p>
        <h2 id="contact-title" className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-5xl">
          {"Let's Connect"}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-primary-foreground/85">
          {"I'm open to learning opportunities, collaborations, and friendly conversations about web development."}
        </p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary-foreground/80">
          <MapPin className="size-4" aria-hidden="true" />
          {site.location}
        </p>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {links.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-full flex-col items-center gap-2 rounded-xl bg-background p-5 text-foreground transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-foreground/50"
              >
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <span className="font-semibold">{label}</span>
                <span className="break-all text-sm text-muted-foreground">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
