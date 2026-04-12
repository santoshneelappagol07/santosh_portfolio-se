import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/santoshneelappa",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/santoshneelappagol",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:santosh.neelappagol@example.com",
    label: "Email",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Santosh Neelappagol. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
