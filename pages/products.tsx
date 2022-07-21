import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/MainLayout"
import { NextPageWithLayout } from "./_app"

const Products: NextPageWithLayout = () => {

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="px-4 sm:px-28 xl:px-60">
        <div className="background my-11">
          <h1 className="flex items-center text-lg font-medium uppercase">
            Products List
          </h1>
        </div>
        <div className="mb-11 flex justify-between">
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
        </div>
        <div className="mb-11 flex justify-between">
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
        </div>
        <div className="mb-11 flex justify-between">
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
          <a
            href="/items"
            className="card-compact card w-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure>
              <img src="/product-image-placeholder.png" alt="product" />
            </figure>
            <div className="card-body">
              <h3>Product name</h3>
              <h2>P 99.99</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

Products.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Products
