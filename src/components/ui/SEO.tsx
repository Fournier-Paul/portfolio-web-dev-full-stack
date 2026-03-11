'use client'
import Head from 'next/head'

export default function SEO() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Paul Fournier",
            url: "https://paul-fournier.dev",
            jobTitle: "Développeur web full-stack",
            sameAs: [
              "https://github.com/paulfournier",
              "https://linkedin.com/in/paul-fournier-dev"
            ],
            description:
              "Développeur web full-stack spécialisé dans l’écosystème Vue.js, avec expérience sur des projets web en production. J’interviens sur le développement, la maintenance, les mises en production, la résolution d’incidents et l’évolution continue de projets web."
          })
        }}
      />
    </Head>
  )
}