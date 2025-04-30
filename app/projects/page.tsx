"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BlogPage() {
  const { t } = useLanguage()

  return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to home</span>
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("blog.title")}</h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Game Development Process</h2>
                  <p className="mt-2 text-sm text-muted-foreground">April 15, 2023</p>
                  <p className="mt-2 text-muted-foreground">
                    An inside look at my development process for creating engaging game mechanics and how I approach
                    design challenges.
                  </p>
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <Link href="/blog/post-1">{t("blog.readMore")}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Unity Tips & Tricks</h2>
                  <p className="mt-2 text-sm text-muted-foreground">March 22, 2023</p>
                  <p className="mt-2 text-muted-foreground">
                    Useful Unity techniques I've learned while developing my latest project that can help other game
                    developers.
                  </p>
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <Link href="/blog/post-2">{t("blog.readMore")}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Optimizing Game Performance</h2>
                  <p className="mt-2 text-sm text-muted-foreground">February 10, 2023</p>
                  <p className="mt-2 text-muted-foreground">
                    Strategies for improving performance in resource-intensive games and techniques for profiling and
                    optimization.
                  </p>
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <Link href="/blog/post-3">{t("blog.readMore")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
  )
}
