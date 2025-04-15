import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-20 space-y-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Game Info Hub</h1>
        <p className="text-lg leading-relaxed">
          Welcome to Game Info Hub — your digital playground for discovering new games, revisiting classics, and diving deep into the stories that make them great. Whether it&#39;s exploring vast open worlds or mastering high-paced competitive shooters, there&#39;s something here for every type of gamer.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[
          "/pexels-a-darmel-7862505.jpg",
          "/pexels-cottonbro-studio-3945656.jpg",
          "/pexels-pixabay-394568.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-red-600"
          >
            <Image
              src={src}
              alt={`Game image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
