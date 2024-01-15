import * as React from "react";
import type { SVGProps } from "react";
const SvgSortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="sort-icon_svg__a"
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
    <g fill="#fff" mask="url(#sort-icon_svg__a)">
      <path d="M22.708 15.293a1 1 0 0 0-1.414 0L18 18.585V3a1 1 0 0 0-2 0v15.585l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.416 0l5-5a1 1 0 0 0-.002-1.413M12.708 7.293l-5-5a1 1 0 0 0-1.416 0l-5 5a1 1 0 0 0 1.416 1.414l3.293-3.293v15.585a1 1 0 0 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414-1.414" />
    </g>
  </svg>
);
export default SvgSortIcon;
