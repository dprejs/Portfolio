import { useContext } from "react";
import TechCard from "../components/techCard";
import { ScreenContext } from "../context";
import Slider from "react-slick";

export default function TechMobile() {
  const screen = useContext(ScreenContext);
  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 2,
    slidesPerRow: 2,
    swipeToSlide: true,
  };
  return (
    <div id="3" className={`page bg-primary flex flex-col justify-around items-center pb-10 snap-start ${screen.isMobile ? "pt-4" : "pt-12"}`}>
      <div className={`${screen.vh < 800 ? "text-2xl" : "text-4xl"} font-bold w-10/12 pr-10`}>
      Some technologies I have experience with:
      </div>
      {/* <div className="flex flex-wrap h-full justify-center pt-2"> */}
      <div className="w-full">

      <Slider {...settings}>

        <TechCard label={"Typescript"} image={"typescript-plain.png"} small={true} />
        <TechCard label="Javascript" image="nodejs-original.png" small={true} />
        <TechCard label="Python" image="python-original.png" small={true} />
        {/* <TechCard label="Figma" image="figma-original.png" small={true} /> */}
        <TechCard label="Jira" image="jira-original.png" small={true} />
        <TechCard label="Linux" image="linux-original.png" small={true} />
        <TechCard label="Git" image="git.png" small={true} />
        <TechCard label="PostgreSQL" image="postgresql-plain.png" small={true} />
        <TechCard label="Google BigQuery" image="google-bigquery.png" small={true} />
        <TechCard label="Google Firebase" image="google-firebase.png" small={true} />
        <TechCard label="MongoDB" image="mongodb-original.png" small={true} />
        <TechCard label="MySQL" image="mysql-original-wordmark.png" small={true} />
        <TechCard label="React" image="react-original.png" small={true} />
        <TechCard label="Flask" image="flask-original.png" small={true} />
        <TechCard label="Jquery" image="jquery-plain.png" small={true} />
        <TechCard label="Material UI" image="materialui-plain.png" small={true} />
        <TechCard label="NextJS" image="nextjs-original.png" small={true} />
        <TechCard label="Google Cloud Platform" image="googlecloud-original.png" small={true} />
        <TechCard label="Amazon Web Services" image="amazonwebservices-original-wordmark.png" small={true} />
        <TechCard label="Docker" image="docker-plain.png" small={true} />
        <TechCard label="NGINX" image="nginx-original.png" small={true} />
      </Slider>
      </div>
      {/* </div> */}

    </div>
  )
}