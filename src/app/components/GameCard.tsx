'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type GameCardProps = {
  slug: string
  title: string
  description: string
  image: string
  date?: string
}

export default function GameCard({ slug, title, description, image, date }: GameCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transform scale-105 group-hover:scale-110 transition duration-700 ease-out opacity-80 group-hover:opacity-90"
      />

      {/* Overlay blur + gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm z-0 transition duration-300" />

      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <time className="block text-xs text-gray-300 dark:text-gray-400 mb-1">
          {date ?? 'Unknown release date'}
        </time>

        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-sm">
          {title}
        </h3>

        <p className="text-sm text-gray-100 line-clamp-3 mb-4 drop-shadow-sm">
          {description}...
        </p>

        <Link
          href={`/games/${slug}`}
          className="inline-block self-start rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-700 hover:scale-105 dark:hover:bg-red-500"
        >
          Find out more →
        </Link>
      </div>
    </motion.article>
  )
}
