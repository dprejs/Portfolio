import ContactForm from "../components/messageForm"

export default function MessageDesk () {
  return (
    <div id="5" className="page bg-primary flex flex-col justify-center items-center pb-40 snap-start">
    <div className="text-8xl font-extrabold">
      Send me a message!
    </div>
    <div className="text-3xl flex flex-col items-center">
      <div>
        Got a question or proposal, or just want
      </div>
      <div>
        to say hello? Go ahead.
      </div>
    </div>
    <ContactForm />
  </div>
  )
}