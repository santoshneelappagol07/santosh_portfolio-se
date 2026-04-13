"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCallback, useRef } from "react"

const projects = [
  {
    title: "AI Script Generator",
    description:
      "An intelligent script generation tool that leverages AI APIs to create customized scripts based on user requirements. Solves the problem of manual script writing by automating the process with AI-powered assistance.",
    techStack: ["Python", "Flask", "OpenAI API", "HTML/CSS", "JavaScript"],
    features: [
      "AI-powered script generation",
      "Customizable output formats",
      "API key authentication",
      "Real-time generation",
    ],
    githubUrl: "https://github.com/santoshneelappagol07/the-video-script-generator-",
    liveUrl: "https://the-video-script-generator.vercel.app/index.html#generator",
  },
  {
    title: "Trading Analyzer (BTST Tool)",
    description:
      "A Buy Today Sell Tomorrow analysis tool that helps traders identify potential trading opportunities. Analyzes market patterns and provides actionable insights for short-term trading strategies.",
    techStack: ["Python", "Flask", "Pandas", "SQL", "REST API"],
    features: [
      "Analyse the Past 48 hours news and give prediction",
      "Provides prediction for BTST based on the news",
      "Historical news analysis and trading prediction",
      "* please wait for 20 to 25 seconds it will take time to load *",
    ],
    githubUrl: "https://github.com/santoshneelappagol07/news.py",
    liveUrl: "https://btst-trade-analyze-py.onrender.com/",
  },
  {
    title: "Portfolio Backend API",
    description:
      "A RESTful API backend for managing portfolio data, contact form submissions, and project information. Built with Flask following best practices for API development.",
    techStack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "REST API"],
    features: [
      "RESTful endpoints",
      "Database integration",
      "Input validation",
      "Error handling",
    ],
    githubUrl: "https://github.com/santoshneelappagol07/santosh_portfolio-se/tree/main",
    liveUrl: "https://santoshneelappagol07-santoshportfol-ten.vercel.app/",
  },
  {
    title: "SQL Query Optimizer",
    description:
      "A tool to analyze and optimize SQL queries for better performance. Helps developers identify bottlenecks and suggests improvements for database operations.",
    techStack: ["Python", "SQL", "Flask", "MySQL", "Analytics"],
    features: [
      "Query analysis",
      "Performance metrics",
      "Optimization suggestions",
      "Query comparison",
    ],
    githubUrl: "https://github.com/santoshneelappa/sql-optimizer",
    liveUrl: "",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLElement>(null)
  const { ref, isVisible } = useScrollAnimation()

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)"
  }, [])

  return (
    <div ref={ref}>
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
        style={{
          transitionDelay: `${index * 150}ms`,
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Project Header */}
        <div className="p-5 sm:p-6 pb-0">
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Folder className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors hover:underline cursor-pointer">
                {project.title}
              </h3>
            </a>
          ) : (
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          )}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <div className="px-5 sm:px-6 pb-4">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Key Features
          </h4>
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/10 hover:text-primary transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto rounded-full mb-4 transition-all duration-700 delay-200 ${
            headerVisible ? "scale-x-100" : "scale-x-0"
          }`} />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A collection of projects showcasing my skills in Python, Flask, and AI development.
            Each project solves a real-world problem.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
