'use client'

import { motion } from 'framer-motion'
import GameCard from '../components/GameCard'
import gamesData from '../data/games.json'

export default function GameListPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Explore Our Curated Game Collection
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Dive into detailed reviews and highlights of some of the most iconic games across genres and generations.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {gamesData.map((game, index) => (
          <motion.div
            key={game.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="transition-all duration-300"
          >
            <GameCard
              slug={game.slug}
              title={game.title}
              description={game.description.slice(0, 120)}
              image={game.images[0]}
              date={game.releaseDate}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
