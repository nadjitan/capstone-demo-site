import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import Link from "next/link"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"

const Products: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="my-11 sm:px-28 xl:px-60">
        <div className="whitebg my-11 p-8">
          <div className="mb-11">
            <h1 className="flex items-center text-lg font-medium uppercase text-black">
              Products List
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {(() => {
              let productList = []
              for (let i = 1; i <= 17; i++) {
                productList.push(
                  <Link href="/item-page">
                    <a className="card card-compact w-auto rounded-none bg-base-100 transition-all hover:drop-shadow-lg">
                      <figure>
                        <img
                          src="/product-image-placeholder.png"
                          alt="product"
                        />
                      </figure>
                      <div className="card-body">
                        <h3 className="text-black">Product name</h3>
                        <h2 className="text-black">P 99.99</h2>
                      </div>
                    </a>
                  </Link>
                )
              }
              return productList
            })()}
          </div>
        </div>
      </div>
    </>
  )
}

Products.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Products
