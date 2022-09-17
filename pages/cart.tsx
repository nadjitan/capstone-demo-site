import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import Link from "next/link"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"

const Cart: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="my-11 flex w-full gap-10 sm:px-28 xl:px-60">
        <div className="whitebg w-3/5 p-8">
          <h1 className="mb-2 flex items-center text-lg font-medium uppercase">
            CART
          </h1>
          <div className="divider m-0"></div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/product-image-placeholder.png"
                      className="h-24 w-24"
                      alt="product"
                    />
                  </td>
                  <td>PRODUCT NAME EXAMPLE</td>
                  <td>P 99.99</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/product-image-placeholder.png"
                      className="h-24 w-24"
                      alt="product"
                    />
                  </td>
                  <td>PRODUCT NAME EXAMPLE</td>
                  <td>P 99.99</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/product-image-placeholder.png"
                      className="h-24 w-24"
                      alt="product"
                    />
                  </td>
                  <td>PRODUCT NAME EXAMPLE</td>
                  <td>P 99.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="divider m-0"></div>
        </div>
        <div className="whitebg h-min w-2/5 p-8">
          <h1 className="mb-2 flex items-center text-lg font-medium uppercase">
            ORDER SUMMARY
          </h1>
          <div className="divider m-0"></div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td className="p-0.5">Quantity</td>
                  <td className="float-right p-0.5">3</td>
                </tr>
                <tr>
                  <th className="p-0.5">TOTAL COST</th>
                  <th className="float-right p-0.5">P 299.97</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="divider m-0 mb-2"></div>
          <Link href="/checkout">
            <a className="btn btn-circle w-full gap-4 hover:text-secondary-content">
              PROCEED TO CHECKOUT
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

Cart.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Cart
