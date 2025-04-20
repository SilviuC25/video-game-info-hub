'use client'

import gamesData from '../../data/games.json'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'

type Props = {
  params: {
    slug: string
  }
}

export default function GameDetailPage({ params }: Props) {
  const game = gamesData.find((g) => g.slug === params.slug)

  if (!game) return notFound()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-20 max-w-5xl mx-auto text-gray-900 dark:text-gray-100"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
        {game.title}
      </h1>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
        Released on <span className="font-medium">{game.releaseDate}</span>
      </p>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="overflow-hidden rounded-xl shadow-lg mb-10"
      >
        <Image
          src={game.images[0]}
          alt={game.title}
          width={800}
          height={500}
          className="object-cover w-full h-auto transition-transform duration-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg leading-relaxed sm:text-xl sm:leading-loose text-gray-800 dark:text-gray-200 border-l-4 border-red-500 pl-6 italic max-w-3xl mx-auto"
      >
        {game.description}
      </motion.div>
    </motion.div>
  )
}
