'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const posts = [
  { 
    id: 1, 
    title: 'Optimizing Shader Performance in VR Games', 
    date: '2023-06-01', 
    excerpt: 'Exploring advanced techniques for optimizing shader performance in VR games, including GPU instancing and compute shaders.',
    tags: ['VR', 'Shaders', 'Optimization']
  },
  { 
    id: 2, 
    title: 'Implementing ECS for Large-Scale Game Worlds', 
    date: '2023-05-15', 
    excerpt: 'A deep dive into Entity Component System (ECS) architecture and its benefits for creating large-scale, performant game worlds.',
    tags: ['ECS', 'Game Architecture', 'Performance']
  },
  { 
    id: 3, 
    title: 'AI-Driven Procedural Content Generation', 
    date: '2023-05-01', 
    excerpt: 'Exploring the intersection of AI and procedural content generation for creating dynamic and engaging game environments.',
    tags: ['AI', 'Procedural Generation', 'Game Design']
  },
]

const BlogPost = ({ post, index }: { post: typeof posts[0], index: number }) => (
  <motion.article 
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h2 className="text-2xl font-bold mb-2 text-purple-400">{post.title}</h2>
    <p className="text-gray-400 mb-4">{post.date}</p>
    <p className="mb-4">{post.excerpt}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {post.tags.map((tag) => (
        <span key={tag} className="bg-gray-700 px-2 py-1 rounded-full text-xs text-purple-300">
          {tag}
        </span>
      ))}
    </div>
    <Link href={`/blog/${post.id}`} className="text-pink-400 hover:underline">Read more</Link>
  </motion.article>
)

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Blog
      </motion.h1>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <BlogPost key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}

