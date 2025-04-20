'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ImageCarousel from './components/ImageCarousel'

export default function Home() {
  return (
    <section className="relative pt-40 pb-24 px-8 sm:px-20 min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden">

      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-red-500/20 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center max-w-3xl mx-auto z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Discover & Explore the World of Video Games
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Dive into detailed reviews, timeless classics, and hidden gems. This is your portal to immersive worlds, gripping narratives, and unforgettable adventures.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/games"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Explore Games
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 mt-20 flex justify-center"
      >
        <ImageCarousel />
      </motion.div>
    </section>
  )
}
