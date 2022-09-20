import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import Link from "next/link"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"

const ItemPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="my-11 px-4 sm:px-28 xl:px-60">
        <div className="card card-side w-full rounded-none bg-white p-8">
          <figure>
            <img
              src="/product-image-placeholder.png"
              className="item-image"
              alt="items"
            />
          </figure>
          <div className="card-body px-8 py-0">
            <div className="flex w-full flex-col">
              <h4>PRODUCT NAME EXAMPLE</h4>
              <div className="divider m-0"></div>
              <h6>P 99.99</h6>
              <p className="text-black">
                Ut porttitor leo a diam sollicitudin tempor id eu nisl.
                Consequat id porta nibh venenatis cras sed felis eget velit. Nec
                feugiat in fermentum posuere. Semper feugiat nibh sed pulvinar
                proin gravida hendrerit.
              </p>
              <p className="text-black">
                Id semper risus in hendrerit gravida. Lacus suspendisse faucibus
                interdum posuere. Pellentesque diam volutpat commodo sed
                egestas. Facilisis mauris sit amet massa vitae. Id consectetur
                purus ut faucibus pulvinar.
              </p>
              <div className="divider m-0 mt-3"></div>
              <Link href="/cart">
                <a className="btn btn-circle mt-4 w-44 gap-4 font-normal hover:text-secondary-content">
                  Add to Cart
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="whitebg mt-11 p-8">
          <div className="background mb-11 flex justify-between align-middle">
            <h1 className="flex items-center text-lg font-medium uppercase text-black">
              SIMILAR PRODUCTS
            </h1>
            <Link href="/products">
              <a className="btn btn-circle w-44 gap-4 font-normal hover:text-secondary-content">
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
                    <a className="card card-compact w-auto rounded-none bg-base-100 font-normal transition-all hover:drop-shadow-lg">
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

ItemPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default ItemPage
