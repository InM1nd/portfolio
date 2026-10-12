import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyView from '@/components/Main/projects/CaseStudyView'
import { CASE_STUDIES, getCase } from '@/lib/case-studies'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCase(slug)
  if (!study) return {}

  const image = study.images[0]
  const title = `${study.title} — Oleksandr Zabolotnyi`

  return {
    title: { absolute: title },
    description: study.lead,
    alternates: { canonical: `/projects/${study.slug}` },
    openGraph: {
      title,
      description: study.lead,
      url: `/projects/${study.slug}`,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.caption }],
    },
  }
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params
  const study = getCase(slug)
  if (!study) notFound()
  return <CaseStudyView study={study} />
}
