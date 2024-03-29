import * as React from "react";
import { SVGProps } from "react";
const Wave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#e4d2ea"
      d="m0 192 48-10.7C96 171 192 149 288 128s192-43 288-48 192 5 288 37.3c96 31.7 192 85.7 288 101.4 96 16.3 192-5.7 240-16l48-10.7V0H0Z"
    />
  </svg>
);
export default Wave;
