'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-red-700 dark:text-red-500 font-bold text-xl hover:opacity-90 transition"
        >
          🎮 GameInfoHub
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-200 hover:text-red-700 dark:hover:text-red-400 transition"
          >
            Home
          </Link>
          <Link
            href="/games"
            className="text-gray-600 dark:text-gray-200 hover:text-red-700 dark:hover:text-red-400 transition"
          >
            Game List
          </Link>
          <Link
            href="/about"
            className="text-gray-600 dark:text-gray-200 hover:text-red-700 dark:hover:text-red-400 transition"
          >
            About
          </Link>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="ml-4 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 p-2 text-gray-800 dark:text-gray-200 transition duration-200 hover:scale-110"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
