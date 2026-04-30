"use client"

import { Code2, Database, Brain, Server } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
  {
    icon: Code2,
    title: "Python Development",
    description: "Proficient in Python with focus on clean, maintainable code",
  },
  {
    icon: Server,
    title: "Flask Backend",
    description: "Building RESTful APIs and web applications with Flask",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing AI solutions using modern APIs and tools",
  },
  {
    icon: Database,
    title: "SQL & Databases",
    description: "Designing and optimizing database schemas and queries",
  },
]

export function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto rounded-full transition-all duration-700 delay-200 ${
            headerVisible ? "scale-x-100" : "scale-x-0"
          }`} />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className={`space-y-6 transition-all duration-700 ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I&apos;m a <span className="text-foreground font-medium">Python Developer</span>
               completed MCA in 2025, with a strong focus on backend development and AI applications.
              My approach is practical and results-driven—I build solutions that solve real problems.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in <span className="text-foreground font-medium">Flask</span>,{" "}
              <span className="text-foreground font-medium">SQL databases</span>, and{" "}
              <span className="text-foreground font-medium">AI API integrations</span>, I develop
              backend systems that are both efficient and scalable. I believe in learning by building,
              and every project I take on is an opportunity to create something meaningful.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Currently exploring opportunities where I can contribute to innovative projects
              while continuing to grow as a developer.
            </p>
          </div>

          {/* Highlights Grid */}
          <div
            ref={cardsRef}
            className={`grid grid-cols-2 gap-4 sm:gap-6 stagger-children ${
              cardsVisible ? "stagger-visible" : ""
            }`}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
