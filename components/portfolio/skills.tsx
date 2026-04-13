"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Programming Languages",
    emoji: "💻",
    skills: ["Python", "SQL", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Frameworks & Libraries",
    emoji: "⚡",
    skills: ["Flask", "Pandas", "NumPy"],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Render", "Vercel"],
  },
  {
    title: "Concepts & Methodologies",
    emoji: "🧠",
    skills: [
      "AI Integration",
      "Backend Development",
      "Object Oriented Programming",
      "Agile Basics",
    ],
  },
]

export function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto rounded-full transition-all duration-700 delay-200 ${
            headerVisible ? "scale-x-100" : "scale-x-0"
          }`} />
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 stagger-children ${
            gridVisible ? "stagger-visible" : ""
          }`}
        >
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-5 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="text-2xl mb-3">{category.emoji}</div>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 bg-muted text-muted-foreground text-xs sm:text-sm rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
