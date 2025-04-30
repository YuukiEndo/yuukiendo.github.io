"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BlogPost1Page() {
  const { t } = useLanguage()

  return (
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to blog</span>
          </Link>
        </Button>
      </div>

      <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Game Development Process</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <time dateTime="2023-04-15">April 15, 2023</time>
          <span>•</span>
          <span>10 min read</span>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-300 mb-8">
          <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
            Featured Image
          </div>
        </div>

        <div className="space-y-6">
          <p>
            This is a placeholder for your blog post content. You can add your detailed content here about your game
            development process.
          </p>

          <h2>Planning Phase</h2>
          <p>
            Add content about your planning phase here. Discuss how you approach the initial concept, brainstorming, and
            creating a roadmap for your game development projects.
          </p>

          <h2>Prototyping</h2>
          <p>
            Add content about your prototyping process here. Explain how you test core mechanics and iterate on gameplay
            elements before full production.
          </p>

          <h2>Production</h2>
          <p>
            Add content about your production workflow here. Discuss your development methodology, tools, and how you
            manage the project timeline.
          </p>

          <h2>Testing and Iteration</h2>
          <p>
            Add content about your testing and iteration process here. Explain how you gather feedback and refine your
            game based on playtesting results.
          </p>

          <h2>Conclusion</h2>
          <p>
            Summarize your game development process and provide any final thoughts or recommendations for other
            developers.
          </p>
        </div>
      </article>

      <div className="mx-auto max-w-3xl mt-12 border-t pt-8">
        <h3 className="text-xl font-bold mb-4">Related Posts</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h4 className="font-bold">Unity Tips & Tricks</h4>
            <p className="text-sm text-muted-foreground mb-2">March 22, 2023</p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/blog/post-2">Read More</Link>
            </Button>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-bold">Optimizing Game Performance</h4>
            <p className="text-sm text-muted-foreground mb-2">February 10, 2023</p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/blog/post-3">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
