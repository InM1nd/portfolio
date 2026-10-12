'use client'

import Image from 'next/image'
import { useRef } from 'react'
import type { CaseImage } from '@/lib/case-studies'

const CaseFigure = ({ image, priority = false }: { image: CaseImage; priority?: boolean }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <figure>
      <button
        type="button"
        onClick={() => {
          const dialog = dialogRef.current
          dialog?.showModal()
          dialog?.querySelector('button')?.focus()
        }}
        className={`block w-full cursor-zoom-in border border-terminal-green/20 bg-black text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green ${
          image.narrow ? 'mx-auto max-w-[280px]' : 'max-w-full'
        }`}
      >
        <Image
          src={image.src}
          alt={image.caption}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={image.narrow ? '280px' : '(max-width: 1024px) 92vw, 70vw'}
          className={image.narrow ? 'mx-auto h-auto w-full max-w-[280px]' : 'h-auto w-full'}
        />
      </button>
      <figcaption className="mt-1.5 font-mono text-[12px] leading-snug text-terminal-text/70">{image.caption}</figcaption>
      <dialog
        ref={dialogRef}
        aria-label={image.caption}
        className="m-auto max-h-[92dvh] w-[min(960px,calc(100vw-1.5rem))] border border-terminal-green/45 bg-black p-3 text-terminal-text backdrop:bg-black/80"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close()
        }}
      >
        <form method="dialog" className="mb-2 flex justify-end">
          <button className="terminal-button border border-terminal-green/45 bg-transparent px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-green hover:bg-terminal-green hover:text-black">
            Close
          </button>
        </form>
        <Image
          src={image.src}
          alt={image.caption}
          width={image.width}
          height={image.height}
          className="mx-auto h-auto max-h-[78dvh] w-auto max-w-full"
        />
      </dialog>
    </figure>
  )
}

export default CaseFigure
