'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Sanya from '@/img/other/SANYA.jpg'

const Team = () => {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  const skills = [
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 90 },
    { name: 'Three.js', level: 70 },
    { name: 'Next.js', level: 80 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML/CSS', level: 95 },
  ]

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg' },
  ]

  const timeline = [
    {
      period: '2020 - 2021',
      role: 'Frontend Developer',
      note: 'Production websites, UI implementation, responsive systems.',
    },
    {
      period: '2022 - 2023',
      role: 'React / TypeScript Engineer',
      note: 'Component architecture, DX improvements, reusable UI patterns.',
    },
    {
      period: '2024 - NOW',
      role: 'Interface Engineer',
      note: 'Interactive experiences, performance-first frontend, product polish.',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  const experienceYears = new Date().getFullYear() - 2020
  const clearanceLevel = 'EXPERT'

  return (
    <section className="flex flex-col items-center px-4 md:px-6 mb-12 mx-auto pt-36 md:pt-40 w-full">
      <div className="w-full max-w-[1700px]">
        <div className="border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 shadow-glow-sm">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4 mb-6 pb-5 border-b border-terminal-green/30">
            <div>
              <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-[0.2em] mb-2">
                OPERATOR DOSSIER
              </div>
              <h1 className="font-mono text-3xl md:text-5xl text-terminal-green uppercase tracking-wider">
                ABOUT / PROFILE
              </h1>
              <p className="font-mono text-sm md:text-base text-terminal-green/75 mt-2 max-w-3xl">
                Frontend engineer focused on clean interfaces, smooth interactions and practical
                architecture for real products.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 font-mono text-xs md:text-sm">
              <div className="border border-terminal-green/40 bg-terminal-dark/20 px-3 py-2">
                <span className="text-terminal-green/60">USER_ID:</span>{' '}
                <span className="text-terminal-green">InM1nd_487</span>
              </div>
              <div className="border border-terminal-green/40 bg-terminal-dark/20 px-3 py-2">
                <span className="text-terminal-green/60">CLEARANCE:</span>{' '}
                <span className="text-terminal-green">{clearanceLevel}</span>
              </div>
              <div className="border border-terminal-green/40 bg-terminal-dark/20 px-3 py-2 col-span-2 md:col-span-1">
                <span className="text-terminal-green/60">EXPERIENCE:</span>{' '}
                <span className="text-terminal-green">{experienceYears} YEARS</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-6">
            <div className="xl:col-span-1 space-y-5">
              <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4">
                <div className="relative">
                  <Image
                    src={Sanya}
                    alt="Alex"
                    className="w-full h-auto object-cover border border-terminal-green/40"
                    style={{
                      filter: 'grayscale(28%) brightness(0.9) contrast(1.12)',
                    }}
                    width={420}
                    height={540}
                    priority
                  />
                  <div className="absolute inset-0 bg-terminal-green/5 pointer-events-none" />
                </div>
                <div className="mt-4 pt-3 border-t border-terminal-green/30 font-mono text-sm uppercase tracking-wider text-terminal-green">
                  <div className="font-bold text-base">ALEX</div>
                  <div className="text-xs text-terminal-green/70 mt-1">VIENNA, AUSTRIA</div>
                </div>
              </div>

              <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4">
                <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-wider mb-3">
                  FOCUS AREAS
                </div>
                <ul className="space-y-2 font-mono text-xs md:text-sm text-terminal-green/85">
                  <li>[•] Frontend architecture and reusable component systems</li>
                  <li>[•] UX-oriented animations and state-driven interactions</li>
                  <li>[•] Performance optimization and rendering quality</li>
                  <li>[•] Visual consistency across product sections</li>
                </ul>
              </div>
            </div>

            <div className="xl:col-span-2 space-y-5">
              <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5">
                <div className="font-mono text-xs text-terminal-green/70 mb-3 uppercase tracking-wider">
                  BIO
                </div>
                <div className="font-mono text-sm md:text-base text-terminal-green/90 space-y-3 leading-relaxed">
                  <p>
                    I build interfaces that are both expressive and reliable. My main focus is
                    turning complex product ideas into clear user flows with strong visual identity.
                  </p>
                  <p>
                    In daily work I combine system thinking with design sensibility: from component
                    architecture and type-safe frontend to interaction details and motion polish.
                  </p>
                  <p>
                    I value transparent communication, ownership and clean execution. Good products
                    are created by teams that align on quality and move fast without sacrificing structure.
                  </p>
                </div>
              </div>

              <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5">
                <div className="font-mono text-xs text-terminal-green/70 mb-4 uppercase tracking-wider">
                  SKILLS MATRIX
                </div>
                <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs md:text-sm text-terminal-green uppercase">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs md:text-sm text-terminal-green">
                          {skillsVisible ? skill.level : 0}%
                        </span>
                      </div>
                      <div className="h-2 border border-terminal-green/40 bg-black relative overflow-hidden">
                        <div
                          className="h-full bg-terminal-green transition-all duration-1000 ease-out"
                          style={{
                            width: skillsVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 90}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5">
                <div className="font-mono text-xs text-terminal-green/70 mb-4 uppercase tracking-wider">
                  EXPERIENCE TIMELINE
                </div>
                <div className="space-y-2">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 border border-terminal-green/35 bg-black/40 px-3 py-2">
                      <div className="font-mono text-xs text-terminal-green/70 uppercase">{item.period}</div>
                      <div>
                        <div className="font-mono text-sm text-terminal-green uppercase">{item.role}</div>
                        <div className="font-mono text-xs text-terminal-green/75 mt-1">{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5">
            <div className="font-mono text-xs text-terminal-green/70 mb-4 uppercase tracking-wider">
              TECH STACK
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 md:gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="border border-terminal-green/40 bg-black/50 p-3 flex flex-col items-center justify-center transition-all duration-300 hover:bg-terminal-green/10 hover:border-terminal-green"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 md:w-9 md:h-9 object-contain mb-2"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(54%) sepia(67%) saturate(500%) hue-rotate(120deg)',
                    }}
                    title={tech.name}
                  />
                  <span className="font-mono text-[10px] text-terminal-green/75 uppercase text-center leading-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
