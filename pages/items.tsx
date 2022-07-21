import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import Link from "next/link"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/MainLayout"
import { NextPageWithLayout } from "./_app"

const Items: NextPageWithLayout = () => {
  return (
    <>
      <div className="my-11 px-4 sm:px-28 xl:px-60">
        <div className="card card-side w-full rounded-none bg-white">
          <figure>
            <img
              src="/product-image-placeholder.png"
              className="item-image"
              alt="items"
            />
          </figure>
          <div className="card-body">
            <div className="flex w-full flex-col">
              <h4>PRODUCT NAME EXAMPLE</h4>
              <div className="divider m-0"></div>
              <h6>P 99.99</h6>
              <p>
                Ut porttitor leo a diam sollicitudin tempor id eu nisl.
                Consequat id porta nibh venenatis cras sed felis eget velit. Nec
                feugiat in fermentum posuere. Semper feugiat nibh sed pulvinar
                proin gravida hendrerit.
              </p>
              <p>
                Id semper risus in hendrerit gravida. Lacus suspendisse faucibus
                interdum posuere. Pellentesque diam volutpat commodo sed
                egestas. Facilisis mauris sit amet massa vitae. Id consectetur
                purus ut faucibus pulvinar.
              </p>
              <Link href="/cart">
                <div className="btn btn-circle mt-4 w-44 gap-4 hover:text-secondary-content">
                  Add to Cart
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Items.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Items
