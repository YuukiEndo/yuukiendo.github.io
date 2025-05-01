"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HellOfABulletProjectPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to projects</span>
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hell of a Bullet</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              {/* Project Hero */}
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-300">
                <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                  Hell of a Bullet Screenshot
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About the Project</h2>
                <p className="text-muted-foreground">{t("project.hellOfABullet.description")}</p>
                <p className="text-muted-foreground">
                  Simple bullet hell game using a custom game engine created in C++ using Allegro. This game was
                  created for a game engine class and was created in 1 month.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom game engine using Allegro</li>
                  <li>Bullet-hell gameplay mechanics</li>
                  <li>Bullet-hell pattern generation</li>
                  <li>Fully Random patterns</li>
                </ul>
              </div>

              {/* Development Process */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Development Process</h2>
                <p className="text-muted-foreground">
                  This game was part of a game engine class and was created in 1 month. This game was created using a
                  custom game engine created in C++ using Allegro. I was responsible for the development of the
                  bullet-hell spawning as well as making the game run smoothly even with a lot of bullets. The game
                  was able to maintain 60 fps with no drops in frames.
                </p>
              </div>

              {/* Screenshots Gallery */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video rounded-lg bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">Screenshot {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Project Info */}
              <div className="rounded-lg border p-6 space-y-4">
                <h2 className="text-xl font-bold">Project Info</h2>

                <div>
                  <h3 className="font-medium">Role</h3>
                  <p className="text-muted-foreground">Programmer</p>
                </div>

                <div>
                  <h3 className="font-medium">Duration</h3>
                  <p className="text-muted-foreground">1 months</p>
                </div>

                <div>
                  <h3 className="font-medium">Team Size</h3>
                  <p className="text-muted-foreground">2 person</p>
                </div>

                <div>
                  <h3 className="font-medium">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Allegro
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      C++
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Custom Engine
                    </span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="rounded-lg border p-6 space-y-4">
                <h2 className="text-xl font-bold">No Links</h2>
                <div className="space-y-2">

                </div>
              </div>

              {/* Other Projects */}
              <div className="rounded-lg border p-6 space-y-4">
                <h2 className="text-xl font-bold">Other Projects</h2>
                <div className="space-y-2">
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/projects/molementum">Molementum</Link>
                  </Button>
                  <Button variant="link" className="p-0 h-auto block" asChild>
                    <Link href="/projects/horse-named-friday">A Horse Named Friday</Link>
                  </Button>
                  <Button variant="link" className="p-0 h-auto block" asChild>
                    <Link href="/projects/tanks-a-lot">Tanks-A-Lot</Link>
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
