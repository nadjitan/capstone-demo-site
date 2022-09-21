import Head from "next/head"
import Link from "next/link"
import { ReactElement } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"

const Register: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="flex w-full justify-center">
        <div className="whitebg my-11 w-full p-8 sm:w-1/2 xl:w-1/3">
          <h1 className="mb-4 text-lg font-medium uppercase text-black">
            Register
          </h1>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered mb-4 w-full"
            />
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered mb-4 w-full"
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered mb-4 w-full"
            />
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered mb-4 w-full"
            />
            <div className="flex w-full justify-end">
              <button className="btn w-full font-normal hover:text-secondary-content">
                Submit
              </button>
            </div>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Link href="/login">
              <a className="link link-hover font-normal text-neutral-content">
                Already have an account? Login here.
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

Register.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Register
