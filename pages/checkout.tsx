import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import Link from "next/link"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/main-layout"
import { NextPageWithLayout } from "./_app"

const Checkout: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="my-11 flex w-full gap-10 sm:px-28 xl:px-60">
        <div className="whitebg w-3/5 p-8">
          <h1 className="mb-2 flex items-center text-lg font-medium uppercase">
            CHECKOUT
          </h1>
          <div className="divider m-0"></div>
          <form className="w-full">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 md:w-1/2">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="-mx-3 mt-3 flex flex-wrap">
              <div className="w-full px-3">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="-mx-3 mt-3 flex flex-wrap">
              <div className="w-full px-3 md:w-1/3">
                <label className="label">
                  <span className="label-text">Region</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  placeholder="Region"
                />
              </div>
              <div className="mb-6 w-full px-3 md:w-1/3">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <div className="relative">
                  <select className="input input-bordered w-full appearance-none ">
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:w-1/3">
                <label className="label">
                  <span className="label-text">ZIP Code</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  type="number"
                  placeholder="ZIP"
                />
              </div>
            </div>
          </form>
          <div className="divider m-0 mb-2"></div>
          <a className="btn btn-circle w-full gap-4 font-normal hover:text-secondary-content">
            CONFIRM PURCHASE
          </a>
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
        </div>
      </div>
    </>
  )
}

Checkout.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Checkout
