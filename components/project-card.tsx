"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface ProjectCardProps {
  title: string
  descriptionKey: string
  image?: string
  link: string
}

export function ProjectCard({ title, descriptionKey, image, link }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="aspect-video overflow-hidden rounded-md bg-gray-300">
        <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">{title}</div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t(descriptionKey)}</p>
        <div className="mt-4">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href={link}>
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
  )
}
