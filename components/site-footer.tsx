"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Yuuki Endo. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
              {t("nav.projects")}
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              {t("nav.blog")}
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </footer>
  )
}
