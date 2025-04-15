import gamesData from '../../data/games.json'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = gamesData.find((g) => g.slug === params.slug)

  if (!game) return notFound()

  return (
    <div className="min-h-screen px-6 py-20 max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{game.releaseDate}</p>
      
      <Image
        src={game.images[0]}
        alt={game.title}
        width={800}
        height={500}
        className="rounded-lg shadow-md mb-8 object-cover"
      />
      
      <p className="text-lg leading-relaxed">{game.description}</p>
    </div>
  )
}
