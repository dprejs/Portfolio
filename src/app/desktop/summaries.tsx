import summaries from "../standards/summaries";

export default function SummariesDesk() {
  return (
    <div id="2" className="page bg-secondary flex pb-40  snap-start">
      <div className="flex flex-col p-10 justify-around items-center">
        <div>
          <div className="border-4 rounded-xl border-accent p-8 flex flex-col  gap-10 items-start summary-card">
            <div className="font-extrabold text-7xl">
              {summaries[0].title}
            </div>
            <div className="text-xl">
              {summaries[0].content}
            </div>
          </div>
        </div>
        <div className="flex gap-12">
          {Array(6).fill(1).map((x, i) => <div key={i} className="pip bg-accent" />)}
        </div>
      </div>
      <div className="flex flex-col p-10 justify-around items-center">
        <div>
          <div className="border-4 rounded-xl border-accent p-8 flex flex-col  gap-10 items-start summary-card">
            <div className="font-extrabold text-7xl">
              {summaries[1].title}
            </div>
            <div className="text-xl">
              {summaries[1].content}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 justify-around items-center">
        <div className="flex gap-12">
          {Array(6).fill(1).map((x, i) => <div key={i} className="pip bg-accent" />)}
        </div>
        <div className="border-4 rounded-xl border-accent p-8 flex flex-col  gap-10 items-start summary-card">
          <div className="font-extrabold text-7xl">
            {summaries[2].title}
          </div>
          <div className="text-xl">
            {summaries[2].content}
          </div>
        </div>
      </div>
    </div>
  )
}