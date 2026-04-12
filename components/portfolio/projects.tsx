import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// ============================================
// ADD YOUR PROJECTS HERE
// Each project should follow this structure
// ============================================
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
    githubUrl: "https://github.com/santoshneelappa/ai-script-generator",
    liveUrl: "", // Add your Render/Railway URL here
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
    githubUrl: "https://github.com/santoshneelappa/portfolio-api",
    liveUrl: "", // Add your Render/Railway URL here
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
    liveUrl: "", // Add your Render/Railway URL here
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in Python, Flask, and AI development. 
            Each project solves a real-world problem.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
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
                        className="text-muted-foreground hover:text-primary transition-colors"
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
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors hover:underline cursor-pointer">
                      {project.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Add More Projects Note */}
        <div className="mt-12 text-center p-6 border-2 border-dashed border-border rounded-xl">
          <p className="text-muted-foreground text-sm">
            <span className="font-medium text-foreground">To add more projects:</span> Edit the{" "}
            <code className="px-2 py-1 bg-muted rounded text-xs font-mono">
              components/portfolio/projects.tsx
            </code>{" "}
            file and add your project details to the projects array.
          </p>
        </div>
      </div>
    </section>
  )
}
