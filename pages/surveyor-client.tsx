import { NextPage } from "next"
import dynamic from "next/dynamic"
import { ComponentProps } from "react"

import { Client as ClientType } from "@nadjitan/surveyor"
import "@nadjitan/surveyor/dist/style.css"

const Client = dynamic<ComponentProps<typeof ClientType>>(
  () => import("@nadjitan/surveyor").then(mod => mod.Client),
  { ssr: false }
)

const SurveyorClient: NextPage = () => {
  return (
    <Client
      apiUrl={"https://capstone-api-theta.vercel.app/api/surveyor"}
    />
  )
}

export default SurveyorClient
