import { NextPage } from "next"
import dynamic from "next/dynamic"
import { ComponentProps, ReactElement, useEffect, useState } from "react"

import { Surveyor as Surveyortype } from "@nadjitan/surveyor"
import "@nadjitan/surveyor/dist/style.css"
import Navbar from "../Navbar"

const Surveyor = dynamic<ComponentProps<typeof Surveyortype>>(
  () => import("@nadjitan/surveyor").then(mod => mod.Surveyor),
  { ssr: false }
)

const MainLayout: NextPage<{ children: ReactElement }> = ({ children }) => {
  const [url, setUrl] = useState<string>()

  useEffect(() => setUrl(window.location.href), [children])

  return (
    <Surveyor
      lastData={{
        url: "https://capstone-demo-site.vercel.app/login",
        class: "srvyr-JvPMMKP4",
      }}
      logClicks={
        url !== "https://capstone-demo-site.vercel.app/surveyor-client"
          ? true
          : false
      }
      locateMsg={"Sign in your account"}
      debug={true}
      apiUrl={"https://capstone-api-theta.vercel.app/api/telemetry"}>
      <Navbar />
      {children}
    </Surveyor>
  )
}

export default MainLayout
