'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import historyData from '../data/history.json'
import Image from 'next/image'

export default function HistoryPage() {
  const [currentEvent, setCurrentEvent] = useState(0)

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % historyData.length)
  }

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + historyData.length) % historyData.length)
  }

  const event = historyData[currentEvent]

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h1 className="text-5xl font-extrabold text-red-600 dark:text-red-500 tracking-tight drop-shadow">
          Gaming History
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          <span className="border-b-2 border-red-500 pb-1">A journey through the most iconic moments in the history of gaming.</span>
        </p>

        <div className="relative">
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl shadow-xl overflow-hidden relative max-w-4xl mx-auto"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={1000}
              height={600}
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <div className="bg-black/60 inline-block text-white px-3 py-1 text-sm rounded-full mb-4 font-medium tracking-wide shadow">
                📍 {event.year}
              </div>
              <h3 className="text-3xl font-bold text-white drop-shadow mb-2">
                {event.title}
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed drop-shadow">
                {event.description}
              </p>
            </div>
          </motion.div>

          <button
            onClick={prevEvent}
            className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full border-2 border-red-600 text-red-600 bg-white/80 hover:bg-red-600 hover:text-white/80 hover:scale-105 transition-all cursor-pointer"
          >
            &#60;
          </button>

          <button
            onClick={nextEvent}
            className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full border-2 border-red-600 text-red-600 bg-white/80 hover:bg-red-600 hover:text-white/80 hover:scale-105 transition-all cursor-pointer"
          >
            &#62;
          </button>
        </div>
      </div>
    </section>
  )
}
