import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className="pt-40 pb-20 px-8 sm:px-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Discover & Explore the World of Video Games
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Dive into detailed reviews, updates, and highlights from your favorite games. Stay updated and informed as a true gamer.
        </p>
        <Link
          href="/games"
          className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105 cursor-pointer"
        >
          Explore Games
        </Link>
      </div>

      <div className="mt-16 flex justify-center">
        <Image
          src="/pexels-a-darmel-7862505.jpg"
          alt="Hero Image"
          width={1000}
          height={500}
          className="rounded-xl shadow-lg max-h-[400px] object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </section>
  )
}
