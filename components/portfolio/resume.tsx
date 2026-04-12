import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Download My Resume
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get a comprehensive overview of my skills, experience, and projects. 
            Available in PDF format.
          </p>

          {/* Download Button */}
          <Button asChild size="lg" className="gap-2">
            <a
              href="/resume.pdf"
              download="Santosh_Neelappagol_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>

          {/* Note */}
          <p className="text-xs text-muted-foreground mt-6">
            Add your resume PDF file to the{" "}
            <code className="px-2 py-1 bg-muted rounded font-mono">public</code>{" "}
            folder as{" "}
            <code className="px-2 py-1 bg-muted rounded font-mono">resume.pdf</code>
          </p>
        </div>
      </div>
    </section>
  )
}
