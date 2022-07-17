import type { NextPage } from "next"
import Head from "next/head"
// import Foo from "../components/Foo"

const Home: NextPage = () => {
  const array = ["test", "bar", "tdasd"]
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="underline font-bold grid">Hello world!</h1>
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
    </>
  )
}

export default Home
