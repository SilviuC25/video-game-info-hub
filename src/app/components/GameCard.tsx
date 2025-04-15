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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl bg-white dark:bg-gray-800"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-300 group-hover:opacity-60"
      />

      <div className="relative z-10 bg-gradient-to-t from-gray-900/70 to-transparent pt-48">
        <div className="p-6">
          <time className="block text-xs text-gray-200 mb-1">{date ?? 'Unknown release date'}</time>

          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

          <p className="text-sm text-white/90 line-clamp-3 mb-4">{description}...</p>

          <Link
            href={`/games/${slug}`}
            className="inline-block rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 dark:hover:bg-red-500"
          >
            Find out more
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
