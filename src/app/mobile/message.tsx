import { useContext } from "react"
import ContactForm from "../components/messageForm"
import { ScreenContext } from "../context"

export default function MessageMobile() {
  const screen = useContext(ScreenContext);
  return (
    <div id="5" className="page bg-primary flex flex-col justify-center items-center p-5 gap-5 snap-start">
      <div className={`${screen.vh < 800 ? "text-4xl" : "text-6xl"} font-extrabold`}>
        Send me a message!
      </div>
      <div className="text-3xl flex flex-col items-center">
        Got a question or proposal, or just want
        to say hello? Go ahead.
      </div>
      <ContactForm />
    </div>
  )
}