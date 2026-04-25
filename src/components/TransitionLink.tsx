'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from './TransitionContext'

interface TransitionLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
  href: string
  className?: string
}

const TransitionLink = ({ children, href, onClick, ...props }: TransitionLinkProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const { isTransitioning, startTransition } = useTransition()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e)
    }

    // If strictly opening in new tab or external link, let default behavior happen
    if (props.target === '_blank' || href.startsWith('http')) {
      return
    }

    // Normalize paths for comparison (remove trailing slashes)
    const normalize = (p: string) => p.replace(/\/$/, '') || '/'
    const currentPath = normalize(pathname)
    const targetPath = normalize(href)

    // If linking to same page or already transitioning, just ignore
    if (currentPath === targetPath || isTransitioning) {
      e.preventDefault()
      return
    }

    e.preventDefault()

    // 1. Play Exit Animation
    await startTransition()

    // 2. Navigate
    router.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}

export default TransitionLink
