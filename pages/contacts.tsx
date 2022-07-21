import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/MainLayout"
import { NextPageWithLayout } from "./_app"

const Contacts: NextPageWithLayout = () => {
  // useEffect(() => {
  //   initSurveyor("https://capstone-api-theta.vercel.app/api/telemetry")
  // }, [])

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div className="my-11 w-full px-4 sm:w-1/2 sm:pl-28 xl:pl-60">
        <h1 className="mb-4 flex items-center text-lg font-medium uppercase">
          Contact Us
        </h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered mb-4 w-full"
          />
          <label className="label w-full">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered mb-4 h-24 w-full"
            placeholder="Your Message"
          ></textarea>
          <div className="flex w-full justify-end">
            <button className="btn w-32 hover:text-secondary-content">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

Contacts.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Contacts
