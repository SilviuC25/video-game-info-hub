'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-20 space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold text-red-600 dark:text-red-500 mb-6 tracking-tight">
          About <span className="text-gray-900 dark:text-white">Game Info Hub</span>
        </h1>

        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Welcome to <strong className="text-red-600 dark:text-red-400">Game Info Hub</strong> — your digital playground for discovering new games, revisiting classics, and diving deep into the stories that make them great.
          Whether it's exploring vast open worlds or mastering high-paced competitive shooters, there's something here for every type of gamer.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {[
          "/images/about/1.jpg",
          "/images/about/2.jpg",
          "/images/about/3.jpg",
        ].map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg group relative"
          >
            <Image
              src={src}
              alt={`Game image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
