"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Yuuki Endo</h1>
                <p className="text-xl text-muted-foreground">{t("home.title")}</p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("home.description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/projects">{t("home.viewProjects")}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">{t("home.contactMe")}</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full bg-muted">
                {/* Using a div with background color instead of an image */}
                <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-medium">
                  Yuuki Endo
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">{t("skills.title")}</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t("skills.subtitle")}
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
            <SkillBadge name="Unity" icon="GameController" />
            <SkillBadge name="C++" icon="Code" />
            <SkillBadge name="C#" icon="Hash" />
            <SkillBadge name="Github" icon="Github" />
            <SkillBadge name="Wwise" icon="Music" />
            <SkillBadge name="Photon" icon="Network" />
          </div>
          <div className="mx-auto mt-8 flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-lg">
              <span className="font-medium">{t("skills.languages")}</span>
              <span>English</span>
              <span>•</span>
              <span>日本語 (Japanese)</span>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">{t("projects.title")}</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:gap-8 mt-8">
            {/* Using divs with background colors instead of images */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="aspect-video overflow-hidden rounded-md bg-gray-300">
                <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                  Molementum
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Molementum</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t("project.molementum.description")}</p>
                <div className="mt-4">
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/projects/molementum">
                      {t("projects.viewProject")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="aspect-video overflow-hidden rounded-md bg-gray-300">
                <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                  Hell of a Bullet
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Hell of a Bullet</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {t("project.hellOfABullet.description")}
                </p>
                <div className="mt-4">
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/projects/hell-of-a-bullet">
                      {t("projects.viewProject")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/projects">{t("projects.viewAll")}</Link>
            </Button>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">{t("blog.title")}</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t("blog.subtitle")}
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
              <Link href="/blog/post-1" className="absolute inset-0 z-10" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Game Development Process</h3>
                <p className="text-sm text-muted-foreground">April 15, 2023</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  An inside look at my development process for creating engaging game mechanics...
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
              <Link href="/blog/post-2" className="absolute inset-0 z-10" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Unity Tips & Tricks</h3>
                <p className="text-sm text-muted-foreground">March 22, 2023</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Useful Unity techniques I've learned while developing my latest project...
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
              <Link href="/blog/post-3" className="absolute inset-0 z-10" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Optimizing Game Performance</h3>
                <p className="text-sm text-muted-foreground">February 10, 2023</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Strategies for improving performance in resource-intensive games...
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog">{t("blog.readMore")}</Link>
            </Button>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">{t("contact.title")}</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t("contact.subtitle")}
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com/in/yuukiendo" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/yuukiendo" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:contact@yuukiendo.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
            <Button asChild className="mt-4">
              <Link href="/contact">{t("contact.contactPage")}</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
