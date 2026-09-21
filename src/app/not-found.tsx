import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-0 flex-1 items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center">
        <div className="font-mono text-6xl md:text-8xl text-terminal-green mb-4">
          404
        </div>
        <div className="font-mono text-xl md:text-2xl text-terminal-green/80 mb-6 uppercase tracking-wider">
          ERROR: PAGE NOT FOUND
        </div>
        <div className="font-mono text-sm text-terminal-green/70 mb-8">
          THE REQUESTED RESOURCE DOES NOT EXIST IN THE SYSTEM.
        </div>
        <Link
          href="/"
          className="inline-block px-6 py-3 border-2 border-terminal-green bg-terminal-dark/50 font-mono text-sm uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 shadow-glow-sm hover:shadow-glow"
        >
          [◂] RETURN TO MAIN TERMINAL
        </Link>
      </div>
    </div>
  )
}
