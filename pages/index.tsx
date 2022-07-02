import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/MainLayout"
import { NextPageWithLayout } from "./_app"

const Home: NextPageWithLayout = () => {
  // useEffect(() => {
  //   initSurveyor("https://capstone-api-theta.vercel.app/api/telemetry")
  // }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className=" text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Home
