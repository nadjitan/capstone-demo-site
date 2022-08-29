import { NextPage } from "next"
import dynamic from "next/dynamic"
import { ComponentProps, ReactElement } from "react"

import { Surveyor as Surveyortype } from "@nadjitan/surveyor"
import "@nadjitan/surveyor/dist/style.css"
import Navbar from "../navbar"


const Surveyor = dynamic<ComponentProps<typeof Surveyortype>>(
  () => import("@nadjitan/surveyor").then(mod => mod.Surveyor),
  { ssr: false }
)

const MainLayout: NextPage<{ children: ReactElement }> = ({ children }) => {
  return (
    <Surveyor
      lastData={{ url: "", class: "" }}
      logClicks={false}
      locateMsg={"Login page"}
      debug={true}
      apiUrl={"https://capstone-api-theta.vercel.app/api/telemetry"}>
      <Navbar />
      {children}
    </Surveyor>
  )
}

export default MainLayout
