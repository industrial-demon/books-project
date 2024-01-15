import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <mask
      id="arrow-left-icon_svg__a"
      width={32}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h32v32H0z" />
    </mask>
    <path
      fill="#fff"
      d="M26 15H8.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L8.414 17H26a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgArrowLeftIcon;
