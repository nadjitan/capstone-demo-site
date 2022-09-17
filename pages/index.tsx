import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"
import React from "react"
import Link from "next/link"

const Home: NextPageWithLayout = () => {
  // useEffect(() => {
  //   initSurveyor("https://capstone-api-theta.vercel.app/api/telemetry")
  // }, [])
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <img src="/img_landing.jpg" className="w-full" />
      <div className="whitebg px-4 sm:px-28 xl:px-60">
        <div className="pt-11">
          <div className="background mb-11 flex justify-between align-middle">
            <h1 className="flex items-center text-lg font-medium uppercase">
              HOTTEST PRODUCTS
            </h1>
            <Link href="/products">
              <a className="btn btn-circle w-44 gap-4 hover:text-secondary-content">
                See More {">"}
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {(() => {
              let productList = []
              for (let i = 1; i <= 10; i++) {
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
                        <h3>Product name</h3>
                        <h2>P 99.99</h2>
                      </div>
                    </a>
                  </Link>
                )
              }
              return productList
            })()}
          </div>
        </div>
        <div className="pt-11">
          <div className="background mb-11 flex justify-between align-middle">
            <h1 className="flex items-center text-lg font-medium uppercase">
              NEWEST PRODUCTS
            </h1>
            <Link href="/products">
              <a className="btn btn-circle w-44 gap-4 hover:text-secondary-content">
                See More {">"}
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {(() => {
              let productList = []
              for (let i = 1; i <= 5; i++) {
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
                        <h3>Product name</h3>
                        <h2>P 99.99</h2>
                      </div>
                    </a>
                  </Link>
                )
              }
              return productList
            })()}
          </div>
        </div>
        <div className="py-11">
          <div className="background mb-11 flex justify-between align-middle">
            <h1 className="flex items-center text-lg font-medium uppercase">
              PREORDERS
            </h1>
            <Link href="/products">
              <a className="btn btn-circle w-44 gap-4 hover:text-secondary-content">
                See More {">"}
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {(() => {
              let productList = []
              for (let i = 1; i <= 5; i++) {
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
                        <h3>Product name</h3>
                        <h2>P 99.99</h2>
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

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Home
