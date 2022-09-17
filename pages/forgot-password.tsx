import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import Link from "next/link"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="flex w-full justify-center">
        <div className="whitebg my-11 w-full p-8 sm:w-1/2 xl:w-1/3">
          <h1 className="mb-4 text-lg font-medium uppercase">
            Forgot Password
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
            <div className="flex w-full justify-end">
              <button className="btn w-full hover:text-secondary-content">
                Submit
              </button>
            </div>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Link href="/login">
              <a className="link link-hover text-neutral-content">
                Back to login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

ForgotPassword.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

export default ForgotPassword
