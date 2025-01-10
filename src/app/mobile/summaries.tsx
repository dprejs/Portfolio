import { useContext } from "react";
import summaries from "../standards/summaries";
import { ScreenContext } from "../context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SummariesMobile() {
  const screen = useContext(ScreenContext);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    speed: 1000,
    autoplaySpeed: 8000,
    variableWidth: true,
    adaptiveHeight: true,
    cenerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className={`page bg-secondary flex flex-col justify-center items-center p-2 pt-5 ${screen.vh < 800 ? "gap-2" : "gap-5"}`}>
      <div className="flex gap-12 pr-2">
        {Array(4).fill(1).map((x, i) => <div key={i} className="pip bg-accent" />)}
      </div>
      <div className="slider-container h-3/4 flex">
        <Slider {...settings} className="h-full">
          <div>
            <div style={{ width: "300px", margin: "4px", height: "340px"}} className={`border-2 rounded-xl border-accent flex flex-col items-start p-3 gap-2 justify-around`} >
              <div className={`font-extrabold text-2xl`}>
                {summaries[0].title}
              </div>
              <div className="text-md">
                {summaries[0].content}
              </div>
            </div>
          </div>
          <div>
            <div style={{ width: "300px", margin: "4px", height: "340px"}} className={`border-2 rounded-xl border-accent flex flex-col items-start p-3 gap-2 justify-around`} >
              <div className={`font-extrabold text-2xl`}>
                {summaries[1].title}
              </div>
              <div className={"text-md"}>
                {summaries[1].content}
              </div>
            </div>
          </div>
          <div>
            <div style={{ width: "300px", margin: "4px", height: "340px"}} className={`border-2 rounded-xl border-accent flex flex-col items-start p-3 gap-2 justify-around`} >
              <div className={`font-extrabold text-2xl`}>
                {summaries[2].title}
              </div>
              <div className={"text-md"}>
                {summaries[2].content}
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex gap-12">
        {Array(4).fill(1).map((x, i) => <div key={i} className="pip bg-accent" />)}
      </div>
    </div>
  )
}