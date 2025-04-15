import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 min-h-screen">
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
            About Video Game Info Hub
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Video Game Info Hub is your go-to platform for all things gaming. We strive to provide the most up-to-date and relevant information for gamers of all levels, from casual players to hardcore enthusiasts. Whether you're looking for the latest game releases, in-depth guides, or industry news, we've got you covered.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative group">
              <Image
                src="/pexels-a-darmel-7862505.jpg"
                alt="Gaming World"
                width={400}
                height={300}
                className="rounded-lg transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm">The Gaming World</p>
            </div>

            <div className="relative group">
              <Image
                src="/pexels-lulizler-3165335.jpg"
                alt="Gaming"
                width={400}
                height={300}
                className="rounded-lg transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm">Video Games</p>
            </div>

            <div className="relative group">
              <Image
                src="/teamwork-4566163_1280.jpg"
                alt="Multiplayer Gaming"
                width={400}
                height={300}
                className="rounded-lg transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm">Multiplayer Games</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Why We Love Gaming
          </h2>
          <p className="text-lg mb-12">
            Gaming is more than just a hobby – it’s a form of art, a community, and a way to experience stories in a dynamic way. It combines creativity, skill, and social interaction to create immersive worlds that let you explore, compete, and collaborate like never before. Whether it’s the adrenaline rush of competitive play or the peaceful enjoyment of a single-player campaign, gaming offers something for everyone.
          </p>
        </div>
      </section>
    </div>
  )
}
