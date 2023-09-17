import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
        <div className="flex flex-shrink-0 items-center text-white mr-6">
          <img src="/library.png" className="fill-current h-8 w-8 mr-2" width="54" height="54" />
          <span className="font-semibold text-xl tracking-tight">Local Library</span>
        </div>
        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="block sm:flex sm:flex-grow sm:items-center w-full sm:w-auto">
          <div className="text-sm sm:flex-grow">
            <Link href="/" className="block sm:inline-block mt-4 sm:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </Link>
            <Link href="/authors" className="block sm:inline-block mt-4 sm:mt-0 text-teal-200 hover:text-white mr-4">
              Authors
            </Link>
            <Link href="/genres" className="block sm:inline-block mt-4 sm:mt-0 text-teal-200 hover:text-white mr-4">
              Genres
            </Link>
            <Link href="/books" className="block sm:inline-block mt-4 sm:mt-0 text-teal-200 hover:text-white mr-4">
              Books
            </Link>
            <Link href="/copies" className="block sm:inline-block mt-4 sm:mt-0 text-teal-200 hover:text-white mr-4">
              Book Copies
            </Link>
          </div>
          <div>
            <Link href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0">Login</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}