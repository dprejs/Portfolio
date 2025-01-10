import * as React from "react"
import { SVGProps } from "react"
const ArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 -4.5 20 20"
    {...props}
  >
    <title>{"arrow_right [#346]"}</title>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M20 5.267 14.343 0l-1.414 1.217 3.243 3.01H0v1.958h16.172L12.929 9.53 14.343 11z"
    />
  </svg>
)
export default ArrowSvg
