import TechCard from "../components/techCard"

export default function ExpDesk () {
  return (
    <div id="3" className="page bg-primary flex justify-around items-center pb-40 pt-12 snap-start">
    <div className="flex flex-col gap-10 w-1/3 items-center">
      <div className="text-6xl font-extrabold">
        Some of my experience,
      </div>
      <div className="text-2xl">
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
    <div className="flex flex-col h-full justify-center">
      <div className="flex justify-center">
        <TechCard label={"Typescript"} image={"typescript-plain.png"} />
        <TechCard label="Javascript" image="nodejs-original.png" />
        <TechCard label="Python" image="python-original.png" />
      </div>
      <div className="flex justify-center">
        <TechCard label="Figma" image="figma-original.png" />
        <TechCard label="Jira" image="jira-original.png" />
        <TechCard label="Linux" image="linux-original.png" />
        <TechCard label="Git" image="git.png" />
      </div>
      <div className="flex justify-center">
        <TechCard label="PostgreSQL" image="postgresql-plain.png" />
        <TechCard label="Google BigQuery" image="google-bigquery.png" />
        <TechCard label="Google Firebase" image="google-firebase.png" />
        <TechCard label="MongoDB" image="mongodb-original.png" />
        <TechCard label="MySQL" image="mysql-original-wordmark.png" />
      </div>
      <div className="flex justify-center">
        <TechCard label="React" image="react-original.png" />
        <TechCard label="Flask" image="flask-original.png" />
        <TechCard label="Jquery" image="jquery-plain.png" />
        <TechCard label="Material UI" image="materialui-plain.png" />
        <TechCard label="NextJS" image="nextjs-original.png" />
      </div>
      <div className="flex justify-center">
        <TechCard label="Google Cloud Platform" image="googlecloud-original.png" />
        <TechCard label="Amazon Web Services" image="amazonwebservices-original-wordmark.png" />
        <TechCard label="Docker" image="docker-plain.png" />
        <TechCard label="NGINX" image="nginx-original.png" />
      </div>
      {/* <CodingSvg fill={colors.accent} width={600} height={600} /> */}

    </div>

  </div>
  )
}