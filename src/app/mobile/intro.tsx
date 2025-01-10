import Image from "next/image"
import intro from "../standards/intro"
import { useContext } from "react"
import { ScreenContext } from "../context"

export default function IntroMobile() {
  const screen = useContext(ScreenContext)
  return (
    <div className="page bg-primary grid grid-rows-4 snap-start relative">
      <div className={`row-start-1 row-span-2 flex flex-col ${screen.vh < 800 ? "gap-3" : "gap-5"} pt-10 pl-5`}>
        <div className="text-4xl font-bold">
          Daniel Prejs
        </div>
        <div className={`flex flex-col items-center ${screen.vh < 800 ? "gap-3" : "gap-5"}`}>
          <div className={`${screen.vh <800 ? "text-5xl" : "text-6xl"} font-extrabold`}>
            Full Stack
            <br />
            Developer
          </div>
          <div className={`${screen.vh <800 ? "text-xl" : "text-2xl"} font-bold`}>
            {intro.summary}
          </div>
          <div className={`flex gap-5 px-3 ${screen.vh <800 ? "text-md" : "text-xl"}`}>
            <div>
              {intro.skill1}
            </div>
            <div>
              {intro.skill2}
            </div>
          </div>
        </div>
        <Image className="absolute z-20" style={{ marginLeft: "10vw", marginTop: "55vh" }} src={"/profile.jpg"} alt="Picture of Daniel Prejs" width={screen.vh *.35} height={screen.vh *.35} />
        <div className="mirrorMobile border-4 z-10 border-accent absolute"
        style={{ marginLeft: "16vw", marginTop: "58vh" }} />
        <div className="absolute mirrorMobile flex flex-wrap gap-5 conent-between" style={{ marginLeft: screen.vh < 800 ? "4vw" :"2vw", marginTop: screen.vh < 800 ? "52vh" : "50vh" }}>
          {Array(screen.vh < 800 ? 100 : 190).fill(1).map((x, i) =>
            <div key={i} className="dot bg-accent" />
          )}
        </div>
      </div>
      <div className="bg-secondary row-start-4 w-full"></div>
    </div>
  )
}