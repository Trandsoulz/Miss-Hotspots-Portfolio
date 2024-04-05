import * as React from "react"
import { SVGProps } from "react"
const MLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={87}
    height={80}
    fill="none"
    {...props}
  >
    <path
      stroke="#E4AA37"
      strokeLinecap="round"
      strokeWidth={10}
      d="M5 5.302C8.93 1.885 7.419 28.528 7.419 32.54c0 8.083 1.448 3.901 7.256-.267 7.693-5.521 17.23-16.187 26.068-19.227 5.334-1.835 2.24 26.866 3.09 31.511 1.078 5.887 32.553-23.59 35.877-16.156 4.99 11.156.27 34.01.27 46.599"
      style={{
        strokeDasharray: "197 199",
        strokeDashoffset: 198,
        animation: "WheahTHs_draw 1400ms linear 0ms forwards",
      }}
    />
    <style data-made-with="vivus-instant">
      {
        "@keyframes WheahTHs_draw{to{stroke-dashoffset:0}}@keyframes WheahTHs_fade{0%,93.54838709677419%{stroke-opacity:1}to{stroke-opacity:0}}"
      }
    </style>
  </svg>
)
export default MLogo
