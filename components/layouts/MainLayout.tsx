import { Surveyor } from "@nadjitan/surveyor"
import { NextPage } from "next"
import { ReactElement } from "react"
import Navbar from "../Navbar"

const Layout: NextPage<{ children: ReactElement }> = ({ children }) => {
  return (
    <Surveyor
      debug={true}
      apiUrl={"https://capstone-api-theta.vercel.app/api/telemetry"}
    >
      <Navbar />
      <main>{children}</main>
    </Surveyor>
  )
}

export default Layout
