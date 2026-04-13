"use client"

import { Download, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Resume() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="resume" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
          }`}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-[oklch(70%_0.2_280)] to-[oklch(65%_0.25_320)] p-[1px] animate-border-glow">
            <div className="absolute inset-[1px] rounded-2xl bg-card" />
          </div>

          {/* Content */}
          <div className="relative p-8 sm:p-10 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* Left: Animated Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-2xl flex items-center justify-center animate-float">
                    <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  </div>
                  {/* Sparkle accents */}
                  <Sparkles
                    className="absolute -top-2 -right-2 w-5 h-5 text-primary/60 animate-pulse"
                  />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary/30 rounded-full animate-dot-pulse" />
                </div>
              </div>

              {/* Center: Text */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Download My Resume
                </h2>
                <p className="text-muted-foreground max-w-md mb-4 text-sm sm:text-base leading-relaxed">
                  Get a comprehensive overview of my skills, experience, and projects.
                </p>

                {/* Info pills */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    📄 PDF Format
                  </span>
                </div>
              </div>

              {/* Right: Download Button */}
              <div className="flex-shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 px-6 sm:px-8"
                >
                  <a
                    href="/resume.pdf"
                    download="Santosh_Neelappagol_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
