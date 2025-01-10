import YogaLotusSvg from "../svg/yogaSvg"
import BeerSvg from "../svg/beer"
import MeepleSvg from "../svg/meeple";
import GitHubIcon from '@mui/icons-material/GitHub';
import colors from "../standards/colors"

export default function ProjectsDesk () {
  return (
    <div id="4" className="page bg-secondary p-20 pb-10 snap-start">
    <div className="flex flex-col gap-20">
      <div className="text-7xl font-bold">My Projects</div>
      <div className="flex flex-wrap gap-10 gap-y-28 justify-around">
        <div className="grid grid-cols-4 grid-rows-4 project mb-5">
          <YogaLotusSvg width={150} height={150} fill={colors.text} className="col-start-1 col-span-1 row-start-1 row-span-4" />
          <div className="col-start-2 col-span-3 row-start-1 row-span-1 text-4xl font-bold">
            Soulful Sankalpa
          </div>
          <ul className="col-start-2 col-span-3 row-start-2 row-span-3 text-lg mt-2 list-disc">
            <li>
              Visit here: <a className="underline" href="https://www.soulfulsankalpa.com/">soulfulsankalpa.com</a>
              <a href="https://github.com/dprejs/soulfulSankalpa" className="ml-5">
                <GitHubIcon fontSize="small" />
              </a>
            </li>
            <li>A site for Jenn Daniels a yoga instructor to connect and communicate with clients.</li>
            <li>Made with: Typescript, Nextjs, React, and Material UI.</li>
          </ul>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 project">
          <BeerSvg width={150} height={150} fill={colors.text} className="col-start-1 col-span-1 row-start-1 row-span-4 pt-2" />
          <div className="col-start-2 col-span-3 row-start-1 row-span-1 text-4xl font-bold">
            Harrington&apos;s Taphouse
          </div>
          <ul className="col-start-2 col-span-3 row-start-2 row-span-3 text-lg mt-2 list-disc">
            <li>
              Visit here: <a className="underline" href="https://www.harringtonstap.com/">harringtonstap.com</a>
              <a href="https://github.com/dprejs/Harringtons-Tap-House" className="ml-5">
                <GitHubIcon fontSize="small" />
              </a>
            </li>
            <li>
              The website for a taphouse for customers to access the bar hours, location, and menu.
            </li>
            <li>
              Made with: Typescript, Nextjs, React, Material UI.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 project">
          <MeepleSvg width={150} height={150} fill={colors.text} className="col-start-1 col-span-1 row-start-1 row-span-4" />
          <div className="col-start-2 col-span-3 row-start-1 row-span-1 text-4xl font-bold">
            My Gameshelf
          </div>
          <ul className="col-start-2 col-span-3 row-start-2 row-span-3 text-lg mt-2 list-disc">
            <li>
              Visit here: <a className="underline" href="https://www.mygameshelf.app/">mygameshelf.app</a>
              <a href="https://github.com/dprejs/GameNight" className="ml-5">
                <GitHubIcon fontSize="medium" />
              </a>
            </li>
            <li>
              A site to organize and share your boardgame collection.
            </li>
            <li>
              Made with: Typescript, Next.js,  Firebase, AWS, MUI, Postgres, Docker.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}