import Image from "next/image"
import intro from "../standards/intro"

export default function IntroDesk () {
  return (
          <div id="1" className="page bg-primary grid grid-cols-4 snap-start relative">
            <div className="col-start-1 col-span-2 flex flex-col gap-20 pt-20 pl-10">
              <div className="text-7xl font-bold">
                Daniel Prejs
              </div>
              <div className="flex flex-col gap-10 items-center">
                <div className="text-9xl font-extrabold">
                  Full Stack
                  <br />
                  Developer
                </div>
                <div className="text-4xl font-bold px-10">
                  {intro.summary}
                </div>
                <div className="flex gap-12 mt-3 text-2xl">
                  <div>
                    {intro.skill1}
                  </div>
                  <div>
                    {intro.skill2}
                  </div>
                </div>
              </div>

              <Image className="absolute z-20" style={{ marginLeft: "65vw", marginTop: "15vh" }} src={"/profile.jpg"} alt="Picture of Daniel Prejs" width={400} height={400} />
              <div className="mirror border-4 z-10 border-accent absolute"
                style={{ marginLeft: "71vw", marginTop: "25vh" }} />
              <div className="absolute mirror flex flex-wrap gap-5 conent-between" style={{ marginLeft: "60vw", marginTop: "10vh" }}>
                {Array(224).fill(1).map((x, i) =>
                  <div key={i} className="dot bg-accent" />
                )}
              </div>
            </div>
            <div className="bg-secondary col-start-4 h-full" >
            </div>
          </div>
  )
}