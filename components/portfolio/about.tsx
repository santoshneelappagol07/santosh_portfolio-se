import { Code2, Database, Brain, Server } from "lucide-react"

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
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a <span className="text-foreground font-medium">Python Developer</span> currently 
              pursuing my MCA, with a strong focus on backend development and AI applications. 
              My approach is practical and results-driven—I build solutions that solve real problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in <span className="text-foreground font-medium">Flask</span>, 
              <span className="text-foreground font-medium"> SQL databases</span>, and 
              <span className="text-foreground font-medium"> AI API integrations</span>, I develop 
              backend systems that are both efficient and scalable. I believe in learning by building, 
              and every project I take on is an opportunity to create something meaningful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently exploring opportunities where I can contribute to innovative projects 
              while continuing to grow as a developer.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
