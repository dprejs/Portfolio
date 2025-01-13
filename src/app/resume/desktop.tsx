import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

export default function ResumeDesk() {
  return (
    <>
      <div className="min-h-full skills bg-secondary p-10 flex flex-col gap-5 text-md">
        <div className="flex flex-col gap-2 text-xl">
          <div>
            <a href="mailto:danielnprejs@gmail.com" className="underline text-accent">
              danielnprejs@gmail.com
            </a>
          </div>
          <div>
            Flagstaff, Arizona
          </div>
          <div>
            <a href="tel:+14804669486" className="underline text-accent">
              (480)-466-9486
            </a>
          </div>
        </div>
        <div>

          <div className="text-accent font-bold text-2xl">
            Core Technologies:
          </div>
          <ul className="list-disc">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Node.JS</li>
            <li>React</li>
            <li>NextJs</li>
            <li>Flask</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Amazon EC2</li>
            <li>GCP</li>
            <li>Google Firestore</li>
            <li>Google Big Query</li>
            <li>Google Cloud Functions</li>
            <li>Google Iot Core</li>
            <li>Typesense</li>
            <li>Docker</li>
            <li>Material UI</li>
            <li>RESTful APIs</li>
            <li>Express</li>
            <li>Git</li>
            <li>Jest</li>
            <li>Linux</li>
          </ul>
        </div>
        <div>

          <div className="text-accent text-2xl font-bold">
            Others:
          </div>
          <ul className="list-disc">
            <li>Agile</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Web Development</li>
            <li>Microservices</li>
            <li>Version Control</li>
            <li>Debugging</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-10">
        <div className="text-6xl font-bold">Daniel <br />Prejs</div>
        <div className="text-3xl ">
          Experienced Full Stack Developer
        </div>
        <div className="h-px bg-accent" />
        <div>
          <div className="flex justify-between pr-5">
            <div>

              <div className="text-5xl font-bold">Experience</div>
              <div className="h-4 bg-secondary w-64 exp" />
            </div>
            <div className="flex gap-2 items-center">
              <a href="https://www.linkedin.com/in/daniel-prejs">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="/Daniel Prejs - Software Engineer - Resume.pdf" download>
                <DownloadIcon />
                Download
              </a>
            </div>
          </div>
          <div>
            <div>
              <div className="flex gap-2 items-center mt-10">
                <div>
                  <span className="text-3xl font-extrabold">Elexa Consumer Products</span>
                  <div className="h-3 bg-secondary w-100 exp" />
                </div>
                <span className="text-2xl font-bold">-</span>
                <span className="text-2xl font-bold">Full Stack Engineer</span>
              </div>
              <div className="text-xl font-bold">
                September 2022 - September 2023
              </div>
              <div className="resume-project">
                <div className="flex flex-col condense">
                  <span className="flex items-center">
                    <RadioButtonUncheckedIcon sx={{ width: 15 }} />
                    <div className="text-2xl font-extrabold ml-2">
                      Guardian Analytics Platform
                    </div>
                  </span>
                  <div className="text-lg font-bold">The Analytics platform for our platorm of smart home devices</div>
                  <div className="italic text-lg">
                    Google Bigquery, Leafletjs
                  </div>
                </div>
                <ul className="list-disc pl-10 font-bold">
                  <li>
                    Utilized BigQuery&apos;s geospatial tools to merge geographic data with a public US Census dataset, enhancing data analysis
                    capabilities.
                  </li>
                  <li>
                    Crafted extensive technical documentation for the Guardian Analytics Platform, enabling multiple departments including sales,
                    support, and development to access and utilize the data.
                  </li>
                  <li>
                    Developed and executed a scalable relational database architecture that increased data retrieval speed by 90%
                  </li>
                </ul>
              </div>
              <div className="resume-project">
                <div className="flex flex-col condense">
                  <span className="flex items-center">
                    <RadioButtonUncheckedIcon sx={{ width: 15 }} />
                    <div className="text-2xl font-extrabold ml-2">
                      Guardian Ecosystem Maestro
                    </div>
                  </span>
                  <div className="text-lg font-bold">The control system for our IOT valve controllers and leak detectors</div>
                  <div className="italic text-lg">
                    Python, Firestore, Google Bigquery, Google Cloud Functions, Google IoT Core
                  </div>
                </div>
                <ul className="list-disc pl-10 font-bold">
                  <li>
                    Improved Guardian Ecosystem response time by 30% through implementing asynchronous and multi-threaded functions.
                  </li>
                  <li>
                    Developed and maintained a suite of RESTful APIs for the Guardian Ecosystem, resulting in a 30% increase in system performance.
                  </li>
                </ul>
              </div>
              <div className="resume-project">
                <span className="flex items-center">
                  <RadioButtonUncheckedIcon sx={{ width: 15 }} />
                  <div className="text-2xl font-extrabold ml-2">
                    Guardian Command Center
                  </div>
                </span>
                <div className="text-lg font-bold">A employee facing site used by engineering teams, support teams, and sales teams to troubleshoot, intteract, and analyze our fleet of smart home devices.</div>
                <div className="italic text-lg">Python, Flask, Typsense, Bootstrap, Jinja</div>
                <ul className="list-disc pl-10 font-bold">
                  <li>
                    Revamped Jinja templates for improved modularity, streamlining the development process and reducing over 1,300 lines of redundant code for enhanced eﬃciency in the Guardian Command Center as a Full-Stack Engineer.
                  </li>
                  <li>
                    Improved page load times by 60% through implementing a Typesense instance, improving the eﬃciency of developers and customer
                    support.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center mt-8">
                <div>
                  <span className="text-3xl font-extrabold">Freelance</span>
                  <div className="h-3 bg-secondary w-100 exp" />
                </div>
                <span className="text-2xl font-bold">-</span>
                <span className="text-2xl font-bold">Full Stack Developer</span>
              </div>
              <div className="text-xl font-bold">
                January 2024 - Present
              </div>
              <div className="resume-project">
                <div className="flex flex-col condense">
                  <span className="flex items-center">
                    <RadioButtonUncheckedIcon sx={{ width: 15 }} />
                    <a href="https://www.soulfulsankalpa.com/">
                      <div className="text-2xl font-extrabold ml-2 underline">
                        Soulful Sankalpa
                      </div>
                    </a>
                    <div>
                      <a href="https://github.com/dprejs/soulfulSankalpa" className="ml-5">
                        <GitHubIcon fontSize="medium" />
                      </a>
                    </div>
                  </span>
                  <div className="text-lg font-bold">A website for a yoga instructor to connect with clients and communicate her offerings.</div>
                  <div className="italic text-lg">
                    Typescript, Nextjs, React, Material UI.
                  </div>
                </div>
                <ul className="list-disc pl-10 font-bold">
                  <li>
                    Implemented and documented responsive design features, simplifying site data updates for non-technical site owner.
                  </li>
                  <li>
                    Created responsive mobile and desktop website versions, enhancing the client&apos;s brand representation.
                  </li>
                </ul>
              </div>
              <div className="resume-project">
                <div className="flex flex-col condense">
                  <span className="flex items-center">
                    <RadioButtonUncheckedIcon sx={{ width: 15 }} />
                    <a href="https://github.com/dprejs/Harringtons-Tap-House">
                      <div className="text-2xl font-extrabold ml-2 decoration-solid underline">
                        Harrington&apos;s Tap House
                      </div>
                    </a>
                    <div>
                      <a href="https://github.com/dprejs/Harringtons-Tap-House" className="ml-5">
                        <GitHubIcon fontSize="medium" />
                      </a>
                    </div>
                  </span>
                  <div className="text-lg font-bold">A website for a taphouse to show location, hours, and menu.</div>
                  <div className="italic text-lg">
                    Typescript, Nextjs, React, Material UI.
                  </div>
                </div>
                <ul className="list-disc pl-10 font-bold">
                  <li>
                    Synced online menu to owner&apos;s squarespace inventory enabling the menu to be always up to date with no manual intervention.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-8">
              <div>
                <span className="text-3xl font-extrabold">Personal Projects</span>
                <div className="h-3 bg-secondary w-100 exp" />
              </div>

            </div>
            <div className="resume-project">
              <div className="flex flex-col condense">
                <span className="flex items-center">
                  <RadioButtonUncheckedIcon sx={{ width: 15 }} />
                  <a href="https://www.mygameshelf.app/">
                    <div className="text-2xl font-extrabold ml-2 underline">
                      My Game Shelf
                    </div>
                  </a>
                  <div>
                    <a href="https://github.com/dprejs/GameNight" className="ml-5">
                      <GitHubIcon fontSize="medium" />
                    </a>
                  </div>
                </span>
                <div className="text-lg font-bold">A webapp for organizing and sharing your boardgame collection.</div>
                <div className="italic text-lg">
                  Typescript, Next.js,  Firebase, AWS, MUI, Postgres, Docker.
                </div>
              </div>
              <ul className="list-disc pl-10 font-bold">
                <li>
                  Created a tsvector column in Postgres to implement a weighted text search within the database..
                </li>
                <li>
                  Implemented user authentication with Google accounts utilizing Firebase to simplify user signup and login.
                </li>
                <li>
                  Incorporated Material UI and CSS modules for quicker and more organized UI development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}