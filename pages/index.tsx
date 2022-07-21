import { initSurveyor } from "@nadjitan/surveyor"
import Head from "next/head"
import { ReactElement, useEffect } from "react"
import MainLayout from "../components/layouts/MainLayout"
import { NextPageWithLayout } from "./_app"
import React from "react"

const Home: NextPageWithLayout = () => {
  // useEffect(() => {
  //   initSurveyor("https://capstone-api-theta.vercel.app/api/telemetry")
  // }, [])
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://placeimg.com/1900/600/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/1900/600/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/1900/600/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/1900/600/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle hover:text-secondary-content"
            >
              ❯
            </a>
      <h1 className="grid font-bold underline">Hello world!</h1>
      {/* {array.map((item) => (
        <Foo key={item} title={item} />
      ))} */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-28 xl:px-60">
        <div className="pt-11">
          <div className="background mb-11 flex justify-between align-middle">
            <h1 className="flex items-center text-lg font-medium uppercase">
              HOTTEST PRODUCTS
            </h1>
            <a
              href="/products"
              className="btn btn-circle w-44 gap-4 hover:text-secondary-content"
            >
              See More {">"}
            </a>
          </div>
          {/*hard code ko muna haha*/}
          <div className="flex justify-between">
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
        <div className="pt-11">
          <div className="background mb-11 flex justify-between align-middle">
            <h1 className="flex items-center text-lg font-medium uppercase">
              NEWEST PRODUCTS
            </h1>
            <a
              href="/products"
              className="btn btn-circle w-44 gap-4 hover:text-secondary-content"
            >
              See More {">"}
            </a>
          </div>
          {/*hard code ko muna haha*/}
          <div className="flex justify-between">
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
        <div className="py-11">
          <div className="background mb-11 flex justify-between align-middle">
            <h1 className="flex items-center text-lg font-medium uppercase">
              PREORDERS
            </h1>
            <a
              href="/products"
              className="btn btn-circle w-44 gap-4 hover:text-secondary-content"
            >
              See More {">"}
            </a>
          </div>
          {/*hard code ko muna haha*/}
          <div className="flex justify-between">
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
      </div>
      {/* {array.map((item) => (
        <Foo key={item} title={item} />
      ))} */}
    </>
  )
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Home
