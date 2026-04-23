'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Briefcase, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import SectionDescription from '@/components/ui/SectionDescription'


const events = [
  {
    date: '2025',
    title: 'Spécialisation en architectures systèmes, réseaux et sécurité',
    subtitle: '2023 - 2025',
    description: `Approfondissement des sujets liés à l’infrastructure, à la supervision, à l’automatisation et à la sécurisation d’environnements web, en parallèle de mes missions chez Puls Agency.`,
    icon: <GraduationCap />,
  },
  {
    date: '2021',
    title: 'Concepteur développeur d’applications',
    subtitle: '2021 - 2023',
    description: `Renforcement des compétences en développement full-stack, architecture applicative, qualité logicielle et déploiement, avec mise en pratique directe sur des projets clients chez Puls Agency.`,
    icon: <GraduationCap />,
  },
  {
    date: '2021',
    title: 'Montée en compétences',
    description: `Formation continue avec une forte montée en compétence sur Vue.js et l’écosystème front-end moderne.`,
    icon: <GraduationCap />,
  },
  {
    date: '2020',
    title: 'Projet e-commerce',
    description: `Création d’un site e-commerce from scratch, avec apprentissage concret de Symfony, structuration back-end et gestion d’un projet web complet.`,
    icon: <Briefcase />,
  },
  {
    date: '2019',
    title: 'Stage développeur web',
    description: `Développement front-end et back-end d’un outil de gestion de contenu permettant l’affichage d’un diaporama sur Raspberry.`,
    icon: <Briefcase />,
  },
  {
    date: '2018',
    title: 'Formation Développeur Web Front-End',
    subtitle: '2018 - 2019',
    description: `Formation orientée développement d’interfaces web, intégration et bases du développement applicatif.`,
    icon: <GraduationCap />,
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="timeline" aria-label="Expérience & évolution" className="relative z-10 py-32 px-6 flex flex-col items-center gap-12 text-[var(--foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <SectionTitle>Expérience & évolution</SectionTitle>
        <SectionDescription>Retour chronologique sur mon évolution en tant que développeur.</SectionDescription>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-7xl" // 🔧 élargi ici
      >
        <VerticalTimeline lineColor="var(--highlight)">
          {events.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              contentStyle={{
                background: 'var(--card-bg)',
                color: 'var(--text-main)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid var(--card-bg)',
              }}
              date={item.date}
              iconStyle={{
                background: 'var(--highlight)',
                color: '#fff',
              }}
              icon={item.icon}
            >
              <h3 className="text-lg font-bold text-[var(--text-main)]">
                {item.title}
              </h3>
              {item.subtitle && (
                <h4 className="text-sm font-medium text-[var(--highlight)] mt-1">
                  {item.subtitle}
                </h4>
              )}
              <p className="text-sm whitespace-pre-line mt-2 text-[var(--text-main)]">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  )
}
