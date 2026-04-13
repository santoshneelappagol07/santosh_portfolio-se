"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/santoshneelappagol07",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/santosh-neelappagol-sbn2001",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:santoshneelappagol6341@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <footer
      ref={ref}
      className={`py-8 px-4 sm:px-6 lg:px-8 border-t border-border transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Santosh Neelappagol. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
          >
            Back to top
            <span className="group-hover:-translate-y-0.5 transition-transform">&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
