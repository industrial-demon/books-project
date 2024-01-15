import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="arrow-up-icons_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#arrow-up-icons_svg__a)">
      <path fill="#fff" d="m12 6 5.196 9H6.804z" />
    </g>
  </svg>
);
export default SvgArrowUpIcon;
