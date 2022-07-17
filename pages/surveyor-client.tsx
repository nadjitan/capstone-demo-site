import { Client } from "@nadjitan/surveyor"
import "@nadjitan/surveyor/dist/style.css"
import { NextPage } from "next"

const SurveyorClient: NextPage = () => {
  return (
    <Client
      apiUrl={"https://capstone-api-theta.vercel.app/api/surveyor"}
      loadIframe={true}
    />
  )
}

export default SurveyorClient
