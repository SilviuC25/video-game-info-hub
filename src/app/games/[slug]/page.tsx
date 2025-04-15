import gamesData from '../../data/games.json'

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = gamesData.find((game) => game.slug === params.slug)

  if (!game) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl text-red-500">Game not found</h1>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={game.images[0]}
          alt={game.title}
          className="w-full h-80 object-cover"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{game.title}</h1>
        <time className="block text-sm text-gray-500 dark:text-gray-300 mt-2">
          Released: {new Date(game.releaseDate).toLocaleDateString()}
        </time>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          {game.description}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {game.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${game.title} image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
