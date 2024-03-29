import * as React from "react"
import { SVGProps } from "react"
const Curve = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 230"
    fill="none"
    {...props}
  >
    <path
      stroke="#E3A6C5"
      strokeLinecap="round"
      strokeWidth={100}
      d="M-123 244.5C371-167.001 975 407.499 1523 50"
    />
  </svg>
)
export default Curve
