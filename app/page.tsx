import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Project } from '@/components/project'
import { Contact } from '@/components/contact'
import { site } from '@/lib/site'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        {`© ${new Date().getFullYear()} ${site.name}. Built with care in ${site.location}.`}
      </footer>
    </>
  )
}
