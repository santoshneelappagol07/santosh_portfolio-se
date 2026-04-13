"use client"

import { Briefcase, GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    type: "Internship",
    title: "XCEL CORP",
    organization: "Personal Projects",
    period: "2024 - Present",
    description:
      "Developed and maintained backend systems using Python and Django framework, implementing RESTful APIs for seamless client-server communication ",
    achievements: [
      "Designed and optimized MySQL database schemas, improving query performance using normalization",
      "Participated in Agile development cycles, contributing to sprint planning and delivering features on schedule",
    ],
  },
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Jain College of Engineering, Belagavi",
    period: "2023 - 2025",
    description:
      "Completed my masters in computer applications with focus on software development, database management, and modern programming practices.",
    achievements: [
      "Specializing in Python and backend development",
      "Building real-world projects alongside academics",
      "Learning industry best practices",
    ],
  },
]

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-10 h-10 bg-card border-2 border-primary rounded-full flex items-center justify-center transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          {exp.type === "education" ? (
            <GraduationCap className="w-5 h-5 text-primary" />
          ) : (
            <Briefcase className="w-5 h-5 text-primary" />
          )}
        </div>
        {/* Pulse ring */}
        <div
          className={`absolute inset-0 border-2 border-primary/30 rounded-full transition-all duration-1000 ${
            isVisible ? "animate-ping opacity-0" : "opacity-0"
          }`}
          style={{ animationIterationCount: 2, animationDuration: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div
        className={`ml-14 md:ml-0 md:w-1/2 transition-all duration-700 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12"
        } ${
          isVisible
            ? "opacity-100 translate-x-0"
            : isEven
              ? "opacity-0 md:-translate-x-8 translate-y-4 md:translate-y-0"
              : "opacity-0 md:translate-x-8 translate-y-4 md:translate-y-0"
        }`}
      >
        <div className="bg-card p-5 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
            {exp.period}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
            {exp.title}
          </h3>
          <p className="text-primary font-medium text-sm mb-3">
            {exp.organization}
          </p>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {exp.description}
          </p>
          <ul className={`space-y-2 ${isEven ? "md:text-right" : ""}`}>
            {exp.achievements.map((achievement) => (
              <li
                key={achievement}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  )
}

export function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto rounded-full transition-all duration-700 delay-200 ${
            headerVisible ? "scale-x-100" : "scale-x-0"
          }`} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/50 via-border to-border"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.title} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
