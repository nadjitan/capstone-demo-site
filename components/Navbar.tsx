import { NextPage } from "next"
import Link from "next/link"

const Navbar: NextPage = () => {
  return (
    <>
      <div className="navbar bg-base-100 sm:px-28 xl:px-60">
        <div className="w-0 pr-56">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact mt-3 w-52 rounded-none bg-base-100 p-2 shadow">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/help">Need Help?</Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-primary text-xl font-normal normal-case hover:text-neutral-content">
              DEMO SITE
            </a>
          </Link>
        </div>
        <div className="navbar hidden lg:flex">
          <Link href="/">
            <a className="btn btn-primary font-normal hover:text-neutral-content">
              Home
            </a>
          </Link>
          <Link href="/products">
            <a className="btn btn-primary font-normal hover:text-neutral-content">
              Products
            </a>
          </Link>
          <Link href="/help">
            <a className="ignore-css btn btn-primary font-normal hover:text-neutral-content ">
              Need Help?
            </a>
          </Link>
        </div>
        <div className="navbar-end">
          <Link href="/cart">
            <a className="btn btn-primary w-28 gap-2 font-normal hover:text-neutral-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077Z" />
                <circle cx="7" cy="22" r="2" />
                <circle cx="17" cy="22" r="2" />
              </svg>
              Cart
            </a>
          </Link>
          <Link href="/login">
            <a className="btn btn-circle w-44 gap-3 font-normal hover:text-secondary-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M10,11.25A5.625,5.625,0,1,0,4.375,5.625,5.626,5.626,0,0,0,10,11.25Zm5,1.25H12.848a6.8,6.8,0,0,1-5.7,0H5a5,5,0,0,0-5,5v.625A1.875,1.875,0,0,0,1.875,20h16.25A1.875,1.875,0,0,0,20,18.125V17.5A5,5,0,0,0,15,12.5Z" />
              </svg>
              My Account
            </a>
          </Link>
        </div>
      </div>
      <div className="navbar bg-base-100 pt-0 sm:px-28 xl:px-60">
        <div className="w-0 pr-56">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn no-animation m-1 w-52 gap-4 rounded-none font-normal hover:text-secondary-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M1.962,3.375A1.962,1.962,0,1,0,3.923,5.337,1.962,1.962,0,0,0,1.962,3.375Zm0,6.538a1.962,1.962,0,1,0,1.962,1.962A1.962,1.962,0,0,0,1.962,9.913Zm0,6.538a1.962,1.962,0,1,0,1.962,1.962,1.962,1.962,0,0,0-1.962-1.962Zm18.308.654H7.192a.654.654,0,0,0-.654.654v1.308a.654.654,0,0,0,.654.654H20.269a.654.654,0,0,0,.654-.654V17.76A.654.654,0,0,0,20.269,17.106Zm0-13.077H7.192a.654.654,0,0,0-.654.654V5.99a.654.654,0,0,0,.654.654H20.269a.654.654,0,0,0,.654-.654V4.683A.654.654,0,0,0,20.269,4.029Zm0,6.538H7.192a.654.654,0,0,0-.654.654v1.308a.654.654,0,0,0,.654.654H20.269a.654.654,0,0,0,.654-.654V11.221A.654.654,0,0,0,20.269,10.567Z" />
              </svg>
              All Categories
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu w-52 rounded-none bg-base-100 p-2 text-black shadow">
              <li>
                <Link href="/products">Albums</Link>
              </li>
              <li>
                <Link href="/products">Apparel</Link>
              </li>
              <li>
                <Link href="/products">Packages</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar px-0">
          <div className="w-full flex-none">
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered rounded-none rounded-l-full"
              />
            </div>
            <button className="btn no-animation w-32 rounded-none rounded-r-full bg-theme-primary font-normal text-theme-secondary hover:text-secondary-content">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
