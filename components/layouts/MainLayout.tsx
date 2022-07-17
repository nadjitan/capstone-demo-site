import { Surveyor } from "@nadjitan/surveyor"
import { NextPage } from "next"
import { ReactElement } from "react"
import Navbar from "../Navbar"

const MainLayout: NextPage<{ children: ReactElement }> = ({ children }) => {
  return (
    <Surveyor
      logClicks={false}
      debug={true}
      apiUrl={"https://capstone-api-theta.vercel.app/api/telemetry"}>
      <Navbar />
      <main>{children}</main>
    </Surveyor>
    // <>
    //   <Navbar />
    //   <main>{children}</main>
    // </>
  )
}

export default MainLayout