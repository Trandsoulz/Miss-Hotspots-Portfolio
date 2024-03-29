import * as React from "react"
import { SVGProps } from "react"
const Wave2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "rotate(0deg)",
      transition: ".3s",
    }}
    viewBox="0 0 1440 230"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(228, 210, 234, 1)" />
        <stop offset="100%" stopColor="rgba(228, 210, 234, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m0 92 80 19.2c80 18.8 240 57.8 400 69 160 11.8 320-4.2 480-34.5 160-30.7 320-76.7 480-95.9 160-18.8 320-11.8 480 0 160 11.2 320 27.2 480 53.7 160 26.5 320 65.5 480 57.5s320-61 480-95.8C3520 31 3680 15 3840 38.3 4000 61 4160 123 4320 138s320-15 480-15.3c160 .3 320 30.3 480 34.5 160 3.8 320-19.2 480-49.9 160-30.3 320-69.3 480-69 160-.3 320 38.7 480 69 160 30.7 320 53.7 480 61.4 160 7.3 320 .3 480 3.8s320 19.5 480-7.7C8320 138 8480 69 8640 42.2c160-27.2 320-11.2 480 23 160 34.8 320 87.8 480 80.5 160-7.7 320-76.7 480-76.7s320 69 480 92 320 0 480-11.5 320-11.5 400-11.5h80v92H0Z"
      style={{
        transform: "translate(0,0)",
        opacity: 1,
      }}
    />
    <defs>
      <linearGradient id="b" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(212.86, 181.106, 223.445, 1)" />
        <stop offset="100%" stopColor="rgba(228.551, 202.887, 237.106, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#b)"
      d="m0 0 80 3.8C160 8 320 15 480 26.8 640 38 800 54 960 49.8 1120 46 1280 23 1440 23s320 23 480 46 320 46 480 38.3c160-7.3 320-46.3 480-49.8s320 26.5 480 49.8c160 22.7 320 38.7 480 42.2s320-3.5 480 0 320 19.5 480 23 320-3.5 480 0 320 19.5 480 0 320-72.5 480-76.7c160-3.8 320 42.2 480 69 160 27.2 320 34.2 480 11.5 160-23.3 320-76.3 480-99.6 160-22.7 320-15.7 480 7.6 160 22.7 320 61.7 480 61.4 160 .3 320-38.7 480-69C9280 46 9440 23 9600 26.8 9760 31 9920 61 10080 69s320-8 480 0 320 38 480 53.7c160 15.3 320 15.3 400 15.3h80v92H0Z"
      style={{
        transform: "translate(0,50px)",
        opacity: 0.9,
      }}
    />
  </svg>
)
export default Wave2
