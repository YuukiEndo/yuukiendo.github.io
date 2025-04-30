"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProjectsPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("projects.title")}</h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-300">
                  <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                    Molementum
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Molementum</h2>
                  <p className="mt-2 text-muted-foreground">{t("project.molementum.description")}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Unity
                  </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">C#</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Physics
                  </span>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/projects/molementum">{t("projects.viewProject")}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-300">
                  <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                    Hell of a Bullet
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Hell of a Bullet</h2>
                  <p className="mt-2 text-muted-foreground">{t("project.hellOfABullet.description")}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Unity
                  </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">C#</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Procedural Generation
                  </span>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/projects/hell-of-a-bullet">{t("projects.viewProject")}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-300">
                  <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                    A Horse Named Friday
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">A Horse Named Friday</h2>
                  <p className="mt-2 text-muted-foreground">{t("project.horseNamedFriday.description")}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Unity
                  </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">C#</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Narrative Design
                  </span>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/projects/horse-named-friday">{t("projects.viewProject")}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-300">
                  <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                    Tanks-A-Lot
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Tanks-A-Lot</h2>
                  <p className="mt-2 text-muted-foreground">{t("project.tanksALot.description")}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Unity
                  </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">C#</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Photon
                  </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Multiplayer
                  </span>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/projects/tanks-a-lot">{t("projects.viewProject")}</Link>
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
