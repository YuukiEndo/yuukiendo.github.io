'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const SkillBadge = ({ skill }: { skill: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-gray-800 p-2 rounded-full text-sm cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className={`transition-colors duration-300 ${isHovered ? 'text-purple-400' : 'text-white'}`}>
        {skill}
      </span>
    </motion.div>
  )
}

const TechStack = () => (
  <motion.div
    className="flex flex-wrap justify-center gap-4 mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    {['Unity', 'Unreal Engine', 'C#', 'C++', 'JavaScript', 'WebGL', 'React', 'Node.js'].map((tech) => (
      <div key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
        {tech}
      </div>
    ))}
  </motion.div>
)

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/placeholder.svg"
          alt="Yuuki Endo"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Yuuki Endo</h1>
        <p className="text-xl text-gray-400 mb-4">Game Developer & Software Engineer</p>
        <TechStack />
      </motion.section>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-400">About Me</h2>
        <p className="text-gray-300 mb-4 text-lg leading-relaxed">
          I'm a passionate game developer and software engineer with a keen eye for design and a love for creating immersive gaming experiences. 
          With expertise in various game engines, programming languages, and web technologies, I bring ideas to life through interactive and engaging games and applications.
        </p>
      </motion.section>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Game Development', 'Full-stack Web Dev', '3D Modeling', 'Shader Programming', 'AI in Games', 'VR/AR Development', 'Performance Optimization', 'Multiplayer Networking'].map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          { title: 'Projects', description: 'Explore my portfolio of game and software projects.', href: '/work', color: 'from-purple-500 to-indigo-600' },
          { title: 'Tech Blog', description: 'Read about my insights into game development and software engineering.', href: '/blog', color: 'from-blue-500 to-teal-400' },
          { title: 'Connect', description: 'Get in touch for collaborations or inquiries.', href: '/contact', color: 'from-green-500 to-emerald-400' },
        ].map((item) => (
          <Link key={item.title} href={item.href}>
            <motion.div 
              className={`p-6 rounded-lg bg-gradient-to-br ${item.color} shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          </Link>
        ))}
      </motion.section>
    </div>
  )
}

