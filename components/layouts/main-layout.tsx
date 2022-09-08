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
  const [log, setLog] = useState(false)

  useEffect(() => {
    if (
      window.parent.location.href !==
        "https://capstone-demo-site.vercel.app/surveyor-client" &&
      window.location.href !==
        "https://capstone-demo-site.vercel.app/surveyor-client"
    ) {
      setLog(true)
    } else {
      setLog(false)
    }
  }, [children])

  return (
    <Surveyor
      lastData={{
        url: "https://capstone-demo-site.vercel.app/login",
        class: "srvyr-JvPMMKP4",
      }}
      logClicks={log}
      locateMsg={"Sign in your account"}
      debug={true}
      apiUrl={"https://capstone-api-theta.vercel.app/api/telemetry"}>
      <Navbar />
      {children}
    </Surveyor>
  )
}

export default MainLayout
