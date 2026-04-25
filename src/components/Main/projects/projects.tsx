import Skelya from './skelya'
import Quizzley from './quizzley'
import NebulaDashboard from './nebula'
import TripweavePlanner from './tripweave'
import Polybot from './polybot'
import ArchiveCard from './ArchiveCard'

const Projects = () => {
  return (
    <section className="flex flex-col items-center mb-12 relative z-10 pt-36 md:pt-40 w-full max-w-[1700px] mx-auto">
      {/* Main Projects Grid */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-5 px-4 md:px-6 w-full relative z-20">
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <NebulaDashboard />
        </div>
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Quizzley />
        </div>
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <TripweavePlanner />
        </div>
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Polybot />
        </div>
      </div>

      {/* Section Divider - In Progress */}
      <div className="w-full px-4 md:px-6 my-12">
        <div className="border-t border-terminal-green/30 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-black px-4">
            <span className="font-mono text-base md:text-xl text-terminal-green uppercase tracking-wider">
              IN DEVELOPMENT
            </span>
          </div>
        </div>
      </div>

      {/* In Progress Projects */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-5 px-4 md:px-6 w-full mb-16">
        <div className="col-span-1 border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 relative z-20 shadow-glow-sm project-card">
          <Skelya />
        </div>
      </div>

      {/* Section Divider - Archive */}
      <div className="w-full px-4 md:px-6 my-12">
        <div className="border-t border-terminal-green/30 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-black px-4">
            <span className="font-mono text-base md:text-xl text-terminal-green uppercase tracking-wider">
              ARCHIVE
            </span>
          </div>
        </div>
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6 w-full">
        <ArchiveCard 
          id="001"
          code="DASHBOARD_ADMIN"
          title="DASHBOARD"
          subtitle="CUSTOM ADMIN PANEL"
          date="2024-03-15"
          tech={['React', 'TypeScript', 'Three.js']}
          link="https://inm1nd.github.io/react_admin/"
        />
        <ArchiveCard 
          id="003"
          code="BOARDY_NOTION"
          title="BOARDY"
          subtitle="NOTION WEB CLONE"
          date="2024-06-10"
          tech={['React', 'TypeScript']}
          link="https://balanced-presence-production.up.railway.app/"
        />
        <ArchiveCard 
          id="004"
          code="FILMOTEKA_LIB"
          title="FILMOTEKA"
          subtitle="FILM LIBRARY & TRACKER"
          date="2023-11-05"
          tech={['JavaScript', 'HTML/CSS']}
          link="https://okolobaha-me.github.io/quentin-filmotino/#en"
        />
      </div>
    </section>
  )
}

export default Projects
