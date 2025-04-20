'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
          <span className="text-red-700 font-bold text-xl hover:opacity-90 transition">
            GameInfoHub
          </span>
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <NavLink href="/" label="Home" currentPath={pathname} />
          <NavLink href="/games" label="Game List" currentPath={pathname} />
          <NavLink href="/about" label="About" currentPath={pathname} />
          <NavLink href="/history" label="Gaming History" currentPath={pathname} /> {/* Link-ul pentru History */}
        </nav>
      </div>
    </header>
  )
}

function NavLink({
  href,
  label,
  currentPath
}: {
  href: string
  label: string
  currentPath: string
}) {
  const isActive = currentPath === href

  return (
    <Link
      href={href}
      className={`relative transition-colors text-gray-700 hover:text-red-600 ${
        isActive ? 'text-red-700 font-semibold' : ''
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-red-600 rounded-full"></span>
      )}
    </Link>
  )
}
