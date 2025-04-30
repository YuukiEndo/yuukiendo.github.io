"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function SiteHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Yuuki Endo
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-foreground/80">
            {t("nav.home")}
          </Link>
          <Link href="/projects" className="font-medium transition-colors hover:text-foreground/80">
            {t("nav.projects")}
          </Link>
          <Link href="/blog" className="font-medium transition-colors hover:text-foreground/80">
            {t("nav.blog")}
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-foreground/80">
            {t("nav.contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Button variant="outline" asChild className="hidden md:inline-flex">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
