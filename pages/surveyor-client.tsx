import { Client } from "@nadjitan/surveyor"
import { NextPage } from "next"
import { useEffect, useRef, useState } from "react"

type Data = { url: string; class: string }

function onClassChange(element: HTMLElement, callback: (node: Node) => void) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        callback(mutation.target)
      }
    })
  })
  observer.observe(element, { attributes: true })
  return observer.disconnect
}

const SurveyorClient: NextPage = () => {
  let sampleClicks: Data[] = [
    { url: "http://localhost:3000/", class: "srvyr-2W3kK3Om" },
    { url: "http://localhost:3000/", class: "srvyr-KLjWGj2Q" },
    { url: "http://localhost:3000/about", class: "srvyr-ZpPZdXxY" },
    { url: "http://localhost:3000/about", class: "srvyr-ax37qjEW" },
    { url: "http://localhost:3000/", class: "srvyr-KLjWGj2Q" },
    { url: "http://localhost:3000/", class: "srvyr-2W3kK3Om" },
  ]
  let recordedElems = useRef<Data[]>([])

  useEffect(() => {
    const replayBtn = document.getElementById("btn-replay")
    let iframe: HTMLIFrameElement
    let iframeDoc: Document

    iframe = document.getElementById("srvyr-website") as HTMLIFrameElement

    iframe.onload = () => {
      iframeDoc = iframe.contentDocument!

      iframeDoc.addEventListener("click", e => {
        const elem = e.target! as HTMLElement
        const targetClass =
          elem.className &&
          Array.from(elem.classList).find(c => c.startsWith("srvyr-"))

        if (targetClass) {
          recordedElems.current.push({
            url: iframe.src,
            class: targetClass,
          })
          console.log(recordedElems)
        }
      })

      replayBtn!.onclick = () => {
        let prevEl: HTMLElement | null

        let arrIndex = 0
        let paused = false
        const clicksInterval = setInterval(() => {
          if (arrIndex < sampleClicks.length) {
            if (iframe.src !== sampleClicks[arrIndex].url) {
              paused = true
              prevEl = null
              iframe.src = sampleClicks[arrIndex].url
              iframe.onload = e => {
                const newIframe = e.target as HTMLIFrameElement
                iframeDoc = newIframe.contentDocument!
                onClassChange(iframeDoc.body, () => {
                  paused = false
                })
              }
            }

            if (paused === false) {
              let elem: HTMLElement
              iframeDoc.body.querySelectorAll("*").forEach(el => {
                if (el.classList.contains(sampleClicks[arrIndex].class))
                  elem = el as HTMLElement
              })
              if (prevEl) prevEl.classList.toggle("srvyr-selected")
              elem!.classList.toggle("srvyr-selected")
              prevEl = elem!
              arrIndex++
            }
          } else {
            clearInterval(clicksInterval)
          }
        }, 600)

        // sampleClicks.forEach((data, index) => {
        //   if (iframe.src !== data.url) {
        //     prevEl = null
        //     iframe.src = data.url

        //     iframe.onload = (e: Event) => {
        //       setTimeout(() => {
        //         const newIframe = e.target as HTMLIFrameElement
        //         iframeDoc = newIframe.contentDocument!

        //         onClassChange(iframeDoc.body, () => {
        //           console.log("CLASS CHANGE!")
        //           let elem: HTMLElement
        //           iframeDoc.body.querySelectorAll("*").forEach(el => {
        //             if (el.classList.contains(data.class))
        //               elem = el as HTMLElement
        //           })
        //           if (prevEl) prevEl.classList.toggle("srvyr-selected")
        //           elem!.classList.toggle("srvyr-selected")
        //           prevEl = elem!
        //         })
        //       }, 0 + delay)
        //       delay += 600
        //     }
        //   } else {
        //     setTimeout(() => {
        //       let elem: HTMLElement
        //       iframeDoc.body.querySelectorAll("*").forEach(el => {
        //         if (el.classList.contains(data.class)) elem = el as HTMLElement
        //       })
        //       if (prevEl) prevEl.classList.toggle("srvyr-selected")
        //       elem!.classList.toggle("srvyr-selected")
        //       prevEl = elem!
        //     }, 0 + delay)
        //     delay += 600
        //   }
        // })
      }
    }
  }, [])

  return (
    <>
      <button
        style={{
          border: "2px solid black",
          padding: "1rem 0.8rem",
          borderRadius: "10px",
        }}
        id="btn-replay">
        Replay
      </button>
      <Client />
    </>
  )
}

export default SurveyorClient
