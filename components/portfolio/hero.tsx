import { ArrowRight, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Santosh Neelappagol
          <span className="block text-primary mt-2">Python Developer | AI Builder</span>
        </h1>

        {/* Value Statement */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Building intelligent backend solutions with Python, Flask, and AI. 
          Transforming complex problems into clean, scalable applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="#contact">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <a
              href="https://github.com/santoshneelappa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
