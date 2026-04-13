"use client"

import { useEffect, useState, useMemo } from "react"
import { ArrowRight, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = ["Python Developer", "Backend Engineer", "SQL Developer"]

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1))
          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setText(currentRole.slice(0, text.length - 1))
          if (text === "") {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="text-primary">
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
    </span>
  )
}

function ParticleField() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${(i * 37 + 13) % 100}%`,
      top: `${(i * 53 + 7) % 100}%`,
      size: 2 + (i % 4),
      delay: (i * 0.3) % 4,
      duration: 3 + (i % 3),
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle animate-dot-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Particle Background */}
      <ParticleField />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Mobile: column, Desktop: row */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to opportunities
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Santosh Neelappagol
            </h1>

            {/* Typing Role */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 min-h-[2.5rem]">
              <TypingAnimation />
            </div>

            {/* Value Statement */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed">
              Building intelligent backend solutions with Python, Flask, and AI.
              Transforming complex problems into clean, scalable applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2 w-full sm:w-auto">
                <a
                  href="https://github.com/santoshneelappagol07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div
            className={`flex-shrink-0 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "0s" }} />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary/15 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "0.8s" }} />

              {/* Gradient ring + photo */}
              <div className="gradient-ring animate-pulse-glow">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-card">
                  <Image
                    src="/profile.jpg"
                    alt="Santosh Neelappagol"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                    onError={(e) => {
                      // Fallback to initials if no photo
                      const target = e.currentTarget
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5"><span class="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary">SN</span></div>`
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-16 flex justify-center transition-all duration-700 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <a href="#resume" className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center group-hover:border-primary/50 transition-colors">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
