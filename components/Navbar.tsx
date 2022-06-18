import { NextPage } from "next"
import Link from "next/link"

const Navbar: NextPage = () => {
  return (
    <nav className="flex items-center justify-between max-w-6xl p-4 mx-auto">
      <Link href="/">
        <a className="inline-flex items-center justify-center rounded-lg">
          Website Name
        </a>
      </Link>

      <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <Link href="/">
            <a className="px-3 py-2 rounded-lg">Home</a>
          </Link>
        </li>

        <li>
          <Link href="/about" className="px-3 py-2 rounded-lg">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
