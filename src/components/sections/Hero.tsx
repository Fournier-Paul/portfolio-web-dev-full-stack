'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import TerminalCard from '@/components/ui/TerminalCard'
import SectionTitle from '@/components/ui/SectionTitle'
import SectionDescription from '@/components/ui/SectionDescription'

export default function Hero() {
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'
  const iconSet = isDark ? 'white' : 'black'
  const iconColor = isDark ? 'ffffff' : '000000'

  return (
    <section
      id="home"
      aria-label="Présentation - Paul Fournier"
      className="relative z-10 flex flex-col items-center gap-12 px-6 py-32 text-[var(--foreground)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <SectionTitle as="h1">Paul Fournier</SectionTitle>

        <SectionDescription>Développeur Web Full Stack</SectionDescription>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/Fournier-Paul/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={`https://cdn.simpleicons.org/github/${iconColor}`}
              alt="GitHub"
              className="h-8 w-8"
            />
          </a>

          <a
            href="https://linkedin.com/in/paul-fournier-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={`/images/icons/linkedin-${iconSet}.svg`}
              alt="LinkedIn"
              className="h-8 w-8"
            />
          </a>

          <a
            href="mailto:contact@paul-fournier.dev"
            aria-label="Mail"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={`/images/icons/mail-${iconSet}.svg`}
              alt="Mail"
              className="h-8 w-8"
            />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/docs/CV-Paul-Fournier-Developpeur-Web.pdf"
            download
            aria-label="Télécharger mon CV"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              backgroundColor: 'var(--highlight)',
              color: 'var(--background)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Télécharger CV
          </a>

          <a
            href="/docs/CV-Paul-Fournier-Developpeur-Web.html"
            download
            aria-label="Voir mon CV interactif"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'var(--highlight)',
              color: 'var(--foreground)',
            }}
          >
            <span>✨</span>
            Version Web
            <span>↗</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex w-full justify-center"
      >
        <TerminalCard />
      </motion.div>
    </section>
  )
}