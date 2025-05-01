"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BlogPost3Page() {
  const { t } = useLanguage()

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to blog</span>
          </Link>
        </Button>
      </div>

      <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Blog Post 3
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <time dateTime="2023-02-10">Date 3</time>
          <span>•</span>
          <span>est read time</span>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-300 mb-8">
          <div className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-medium">
            Featured Image
          </div>
        </div>

        <div className="space-y-6">
          <p>
            Blog 3 text here
          </p>

          {/*<h2>Understanding Performance Bottlenecks</h2>
          <p>
            Add content about identifying performance bottlenecks here. Discuss profiling tools, common performance
            issues, and how to diagnose them.
          </p>

          <h2>CPU Optimization</h2>
          <p>
            Add content about CPU optimization here. Explain techniques for improving script performance, optimizing
            physics calculations, and reducing update calls.
          </p>

          <h2>GPU Optimization</h2>
          <p>
            Add content about GPU optimization here. Discuss shader optimization, draw call reduction, and efficient
            rendering techniques.
          </p>

          <h2>Memory Management</h2>
          <p>
            Add content about memory management here. Explain strategies for reducing memory usage, preventing leaks,
            and optimizing asset loading.
          </p>

          <h2>Conclusion</h2>
          <p>
            Summarize your game performance optimization techniques and provide any final thoughts or recommendations
            for other developers.
          </p>*/}
        </div>
      </article>

      <div className="mx-auto max-w-3xl mt-12 border-t pt-8">
        <h3 className="text-xl font-bold mb-4">Related Posts</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h4 className="font-bold">Blog 1</h4>
            <p className="text-sm text-muted-foreground mb-2">Date 1</p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/blog/post-1">Read More</Link>
            </Button>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-bold">Blog 2</h4>
            <p className="text-sm text-muted-foreground mb-2">Date 2</p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/blog/post-2">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
