import { Surveyor } from "@nadjitan/surveyor"
import { NextPage } from "next"
import { ReactElement } from "react"
import Navbar from "../Navbar"

const Layout: NextPage<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
    // <Surveyor
    //   debug={true}
    //   apiUrl={"https://capstone-api-theta.vercel.app/api/telemetry"}
    // >
    // </Surveyor>
  )
}

export default Layout
