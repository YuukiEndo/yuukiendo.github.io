"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function TanksALotProjectPage() {
  const { t } = useLanguage()

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to projects</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tanks-A-Lot</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          {/* Project Hero */}
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-300">
            <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
              Tanks-A-Lot Screenshot
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Project</h2>
            <p className="text-muted-foreground">{t("project.tanksALot.description")}</p>
            <p className="text-muted-foreground">
              Small 3 week project with a 3 person team. This game was meant as a prototype for a greenlight
              competition. We unfortunately did not make it through but we were able to show off our work and our skills
              pretty well.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Turn-based gameplay mechanics</li>
              <li>Extensible bullet class system</li>
              <li>Cinemachine Bullet Following Cameras</li>
              <li>Fun and easy to control Tank Movements</li>
            </ul>
          </div>

          {/* Development Process */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Development Process</h2>
            <p className="text-muted-foreground">
              Rapid prototyping was done in the Unity game engine. We had a lot of fun building this game and
              learning a lot about game development. We had a simple vision of bring a game like Shell Shocked
              into the 3D world. We designed the backend to have easily extensible bullet classes and made it in a way
              where future designers would be able to easily add new bullets to the game.
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
              <p className="text-muted-foreground">Lead Programmer</p>
            </div>

            <div>
              <h3 className="font-medium">Duration</h3>
              <p className="text-muted-foreground">3 Weeks</p>
            </div>

            <div>
              <h3 className="font-medium">Team Size</h3>
              <p className="text-muted-foreground">3 people</p>
            </div>

            <div>
              <h3 className="font-medium">Technologies</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                  Unity
                </span>
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">C#</span>
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                  Cinemachine
                </span>
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                  Raoud Prototyping
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-bold">Links</h2>
            <div className="space-y-2">
{/*              <Button variant="outline" className="w-full" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Play Demo
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  View Source Code
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </Button>*/}
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
                <Link href="/projects/hell-of-a-bullet">Hell of a Bullet</Link>
              </Button>
              <Button variant="link" className="p-0 h-auto block" asChild>
                <Link href="/projects/horse-named-friday">A Horse Named Friday</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
