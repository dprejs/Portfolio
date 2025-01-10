import { useContext } from "react"
import { ScreenContext } from "../context"

export default function ExpMobile () {
  const screen = useContext(ScreenContext);
  return (
    <div id="3" className={`page bg-primary flex flex-col justify-around items-center pb-40 snap-start ${screen.vh < 800 ? "pt-5" : "pt-12"}`}>
    <div className={`flex flex-col w-10/12 items-start ${screen.vh < 800 ? "gap-5" : "gap-10"}`}>
      <div className={`${screen.vh < 800 ? "text-2xl" : "text-4xl"} font-extrabold`}>
        Some of my experience,
      </div>
      <div className={screen.vh < 800 ? "text-md" : "text-lg"}>
        I&apos;ve built and optimized products for companies and clients ranging from websites, IOT devices, and analytics platforms.
        <br />
        <br />
        Recently I built the website for a bar which I synced to their shopify inventory so the online menu would always be accurate with no effort from the owner.
        <br />
        <br />
        Before that I designed and developed an site for a yoga instructor to elegantly display her brand image and offerings.
        <br />
        <br />
        Previously I was working for Elexa Consumer products. While there I had ownership over an employee facing site used by developers, suport staff, and sales staff to develop, debug, and analyze our suite of smart home devices. I also designed and implemented a new analytics platform leveraging the data lake capabilities of Google Big Query to create an performant open ended platform.
      </div>
    </div>
  </div>
  )
}