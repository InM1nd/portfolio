import Skelya from './skelya'
import Dashboard from './dashboard'
import Boardy from './boardy'
import Filmoteka from './filmoteka'
import Quizzley from './quizzley'

const Projects = () => {
  return (
    <section className="flex flex-col items-center mb-12 relative z-10 pt-36 md:pt-40 w-full max-w-[1700px] mx-auto">
      {/* Projects Grid - 2x2 on large screens, 1 column on mobile */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-5 px-4 md:px-6 w-full relative z-20">
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Dashboard />
        </div>
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Quizzley />
        </div>
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Boardy />
        </div>
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Filmoteka />
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-full px-4 md:px-6 my-8">
        <div className="border-t border-terminal-green/30 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-black px-4">
            <span className="font-mono text-base md:text-xl text-terminal-green uppercase tracking-wider">
              IN PROGRESS
            </span>
          </div>
        </div>
      </div>

      {/* In Progress Projects */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-5 px-4 md:px-6 w-full">
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Skelya />
        </div>
      </div>
    </section>
  )
}

export default Projects
