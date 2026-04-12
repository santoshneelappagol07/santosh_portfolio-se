const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flask", "SQLAlchemy", "Pandas", "NumPy", "Jinja2"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Render", "Railway", "Vercel"],
  },
  {
    title: "Concepts & Methodologies",
    skills: [
      "REST API Design",
      "Database Design",
      "AI Integration",
      "Backend Development",
      "Version Control",
      "Agile Basics",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-4 text-center">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
