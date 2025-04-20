'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/images/carousel/1.jpg',
  '/images/carousel/2.jpeg',
  '/images/carousel/3.jpg',
  '/images/carousel/4.jpg'
]

export default function ImageCarousel() {
  const [index, setIndex] = useState(0)

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative w-full max-w-5xl h-[400px] mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer p-2 rounded-full z-10 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer p-2 rounded-full z-10 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
