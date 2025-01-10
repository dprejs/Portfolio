import YogaLotusSvg from "../svg/yogaSvg"
import BeerSvg from "../svg/beer"
import MeepleSvg from "../svg/meeple";
import GitHubIcon from '@mui/icons-material/GitHub';
import colors from "../standards/colors"

export default function ProjectsMobile () {
  return (
    <div id="4" className="page bg-secondary p-5 pb-5 snap-start">
    <div className="flex flex-col gap-2 w-full h-full overflow-scroll">
      <div className="text-5xl font-bold">My Projects</div>
      <div className="flex flex-col gap-2 gap-y-2 justify-around h-full">
        <div className="grid grid-cols-4 grid-rows-3 w-full mb-5">
          <YogaLotusSvg width={75} height={75} fill={colors.text} className="col-start-1 col-span-1 row-start-1 row-span-4" />
          <div className="col-start-2 col-span-3 row-start-1 row-span-1 text-2xl font-bold self-center">
            Soulful Sankalpa
          </div>
          <ul className="col-start-1 ml-10 col-span-4 row-start-2 row-span-3 text-md mt-2 list-disc">
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
        <div className="grid grid-cols-4 grid-rows-3 w-full">
          <BeerSvg width={75} height={75} fill={colors.text} className="col-start-1 col-span-1 row-start-1 row-span-4 pt-2" />
          <div className="col-start-2 col-span-3 row-start-1 row-span-1 text-2xl font-bold self-center">
            Harrington&apos;s Taphouse
          </div>
          <ul className="col-start-1 ml-10 col-span-4 row-start-2 row-span-3 text-md mt-4 list-disc">
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
        <div className="grid grid-cols-4 grid-rows-4 w-full">
          <MeepleSvg width={75} height={75} fill={colors.text} className="col-start-1 col-span-1 row-start-1 row-span-4" />
          <div className="col-start-2 col-span-3 row-start-1 row-span-1 text-2xl font-bold self-center">
            My Gameshelf
          </div>
          <ul className="col-start-1 ml-10 mt-5 col-span-4 row-start-2 row-span-3 text-md mt-8 list-disc">
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