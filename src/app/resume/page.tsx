"use client"
import { useContext } from "react";
import "./resume.css";
import { ScreenContext } from "../context";
import ResumeDesk from "./desktop";
import ResumeMobile from "./mobile";


export default function Resume() {
  const screen = useContext(ScreenContext);
  return (
    <div className={`min-h-screen w-screen  bg-primary flex ${screen.isMobile ? "flex-col" : ""}`}>
      {screen.isMobile ? <ResumeMobile /> : <ResumeDesk />}
    </div>
  )
}