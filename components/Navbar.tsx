import { NextPage } from "next"
import Link from "next/link"

const Navbar: NextPage = () => {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
      <Link href="/">
        <a className="inline-flex items-center justify-center rounded-lg">
          Website Name
        </a>
      </Link>

      <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <Link href="/">
            <a className="rounded-lg px-3 py-2">Home</a>
          </Link>
        </li>

        <li>
          <Link href="/about" className="rounded-lg px-3 py-2">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
