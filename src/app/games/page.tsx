import GameCard from '../components/GameCard'
import gamesData from '../data/games.json'

export default function GameListPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {gamesData.map((game) => (
        <GameCard
          key={game.slug}
          slug={game.slug}
          title={game.title}
          description={game.description.slice(0, 120)}
          image={game.images[0]}
          date={game.releaseDate}
        />
      ))}
    </div>
  )
}
