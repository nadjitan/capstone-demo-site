import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/MainLayout"
import { NextPageWithLayout } from "./_app"

const Login: NextPageWithLayout = () => {
  // useEffect(() => {
  //   initSurveyor("https://capstone-api-theta.vercel.app/api/telemetry")
  // }, [])

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex w-full justify-center">
        <div className="my-11 px-4 lg:w-1/3">
          <h1 className="mb-4 text-lg font-medium uppercase">Login</h1>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
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
              type="text"
              placeholder="Password"
              className="input input-bordered mb-4 w-full"
            />
            <div className="flex w-full justify-end">
              <button className="btn w-full hover:text-secondary-content">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Login.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Login
