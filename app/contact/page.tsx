'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.form 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-purple-400">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-colors duration-200" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-purple-400">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-colors duration-200" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-purple-400">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-colors duration-200" required></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-pink-600 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  )
}

