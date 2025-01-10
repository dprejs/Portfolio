'use client'
import Image from "next/image";
import FlagSvg from "./svg/flagSvg";
import Rider from "./svg/rider";
import colors from "./standards/colors";
import { useContext } from "react";
import { ScreenContext } from "./context";
import IntroDesk from "./desktop/intro";
import SummariesDesk from "./desktop/summaries";
import ExpDesk from "./desktop/experience";
import ProjectsDesk from "./desktop/projects";
import MessageDesk from "./desktop/message";
import IntroMobile from "./mobile/intro";
import SummariesMobile from "./mobile/summaries";
import ExpMobile from "./mobile/experience";
import TechMobile from "./mobile/tech";
import ProjectsMobile from "./mobile/projects";
import MessageMobile from "./mobile/message";


export default function Home() {
  const scrollHandler = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "smooth" })
  }
  const screen = useContext(ScreenContext);
  return (
    <div className="home">
      {screen.isMobile ? <IntroMobile /> : <IntroDesk />}
      {screen.isMobile ? <SummariesMobile/> : <SummariesDesk />}
      {screen.isMobile ? <ExpMobile /> : <ExpDesk />}
      {screen.isMobile ? <TechMobile /> : null}
      {screen.isMobile ? <ProjectsMobile /> : <ProjectsDesk />}
      {screen.isMobile ? <MessageMobile /> : <MessageDesk />}
      {screen.isMobile ? null :
      <div className="h-0">
        <Image className="fixed scroll-path" src={"/path.svg"} alt="scroll" height={50} width={1900} />
        {/* <PathSvg className="fixed scroll-path" height={146} width={1900} stroke={colors.accent}/> */}
        <Rider id="rider" className="fixed" height={70} width={70} fill={colors.accent} />
        <button id="flag1" onClick={() => scrollHandler("1")}>
          <FlagSvg id="flag1" className="fixed" height={40} width={40} fill={colors.accent} onClick={() => scrollHandler("1")} />
        </button>
        <div id="flag1-label" className="fixed label flex flex-col items-start">
          <div className="border-2 border-accent p-1 rounded-md text">
            Intro
          </div>
          <div className="label-border ml-1">
            <div className="label-arrow" />
          </div>
        </div>
        <button id="flag2" onClick={() => scrollHandler("2")}>
          <FlagSvg id="flag2" className="fixed" height={40} width={40} fill={colors.accent} />
        </button>
        <div id="flag2-label" className="fixed label flex flex-col items-center">
          <div className="border-2 border-accent p-1 rounded-md text">
            Summaries
          </div>
          <div className="label-border ml-1">
            <div className="label-arrow" />
          </div>
        </div>
        <button id="flag3" onClick={() => scrollHandler("3")}>
          <FlagSvg id="flag3" className="fixed" height={40} width={40} fill={colors.accent} />
        </button>
        <div id="flag3-label" className="fixed label flex flex-col items-center">
          <div className="border-2 border-accent p-1 rounded-md text">
            About Me
          </div>
          <div className="label-border ml-1">
            <div className="label-arrow" />
          </div>
        </div>
        <button id="flag4" onClick={() => scrollHandler("4")}>
          <FlagSvg id="flag4" className="fixed" height={40} width={40} fill={colors.accent} />
        </button>

        <div id="flag4-label" className="fixed label flex flex-col items-center">
          <div className="border-2 border-accent p-1 rounded-md text">
            My Projects
          </div>
          <div className="label-border ml-1">
            <div className="label-arrow" />
          </div>
        </div>
        <button id="flag5" onClick={() => scrollHandler("5")}>
          <FlagSvg id="flag5" className="fixed" height={40} width={40} fill={colors.accent} />
        </button>
        <div id="flag5-label" className="fixed label flex flex-col items-end">
          <div className="border-2 border-accent p-1 rounded-md text">
            Message Me
          </div>
          <div className="label-border mr-5">
            <div className="label-arrow" />
          </div>
        </div>
      </div>
      }

    </div>
  );
}
