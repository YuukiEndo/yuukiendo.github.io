"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function MolementumProjectPage() {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Molementum</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              {/* Project Hero */}
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-300">
                <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
                  Molementum Screenshot
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About the Project</h2>
                <p className="text-muted-foreground">{t("project.molementum.description")}</p>
                <p className="text-muted-foreground">
                  For this project I was responsible for the development of the gameplay mechanics, as well as
                  implementing WWise audio. I was also the stand in Lead Programmer for when we had some
                  difficulties within the team. This game was a 10 month project for our class and was one of the
                  biggest projects I have been on. This game is currently on steam and is free to play.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom Physics Engine</li>
                  <li>Online multiplayer functionality</li>
                  <li>Keyboard and Controller friendly</li>
                  <li>WWise Implementation for Character voicelines</li>
                </ul>
              </div>

              {/* Development Process */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Development Process</h2>
                <p className="text-muted-foreground">
                  This game was both a fun and challenging project. We had bigger dreams fort his game but were
                  hit with some technical and team issues that we had to overcome. This project was a great learning
                  opportunity for me. This game allowed me to learn more about Unity's web services as well as learn the
                  WWise audio engine. This game has also been a great learning experience for me as I have learned how to
                  work in a larger team as well as how to take a lead position and communicate with other parts of the team
                  with the programmer's needs and limitations.
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
                  <p className="text-muted-foreground">General, Audio Programmer</p>
                </div>

                <div>
                  <h3 className="font-medium">Duration</h3>
                  <p className="text-muted-foreground">10 months</p>
                </div>

                <div>
                  <h3 className="font-medium">Team Size</h3>
                  <p className="text-muted-foreground">12 People</p>
                </div>

                <div>
                  <h3 className="font-medium">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Unity
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      C#
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Custom Physics Engine
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Online Multiplayer
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      WWise
                    </span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="rounded-lg border p-6 space-y-4">
                <h2 className="text-xl font-bold">Links</h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://store.steampowered.com/app/2841830/Molementum/" target="_blank" rel="noopener noreferrer">
                      Steam webpage
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Other Projects */}
              <div className="rounded-lg border p-6 space-y-4">
                <h2 className="text-xl font-bold">Other Projects</h2>
                <div className="space-y-2">
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/projects/hell-of-a-bullet">Hell of a Bullet</Link>
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
