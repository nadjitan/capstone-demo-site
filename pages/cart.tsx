import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"

const Cart: NextPageWithLayout = () => {

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="mt-11 flex w-full justify-center">No items in cart.</div>
    </>
  )
}

Cart.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Cart
