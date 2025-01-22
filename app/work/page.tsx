'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  { 
    id: 1, 
    title: 'Quantum Realm VR', 
    description: 'A VR experience exploring quantum mechanics concepts through interactive simulations.',
    image: '/placeholder.svg',
    tech: ['Unity', 'C#', 'VR', 'Shader Programming']
  },
  { 
    id: 2, 
    title: 'EcoSystem Simulator', 
    description: 'An AI-driven ecosystem simulation with complex creature behaviors and environmental interactions.',
    image: '/placeholder.svg',
    tech: ['Unreal Engine', 'C++', 'AI', 'Procedural Generation']
  },
  { 
    id: 3, 
    title: 'Multiplayer Strategy Game', 
    description: 'A real-time multiplayer strategy game with advanced networking and state synchronization.',
    image: '/placeholder.svg',
    tech: ['Unity', 'C#', 'Networking', 'WebGL']
  },
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
  <motion.div 
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Image src={project.image || "/placeholder.svg"} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-gray-700 px-2 py-1 rounded-full text-xs text-purple-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

export default function Work() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

