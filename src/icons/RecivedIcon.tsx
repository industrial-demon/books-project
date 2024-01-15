import * as React from "react";
import type { SVGProps } from "react";
const SvgRecivedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <mask
      id="recived-icon_svg__a"
      width={41}
      height={41}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.4.5h40v40H.4z" />
    </mask>
    <g clipPath="url(#recived-icon_svg__b)">
      <path
        stroke="#fff"
        d="M5.276 19.457c3.755-4.537 9.36-8.8 15.124-8.8 5.763 0 11.367 4.26 15.124 8.8.503.607.5 1.487 0 2.092-.937 1.132-2.901 3.317-5.519 5.222-3.301 2.403-6.472 3.573-9.61 3.572-3.138-.002-6.306-1.174-9.6-3.572-2.617-1.905-4.582-4.09-5.519-5.222a1.64 1.64 0 0 1 0-2.092Zm22.521 1.046c0-4.08-3.317-7.397-7.397-7.397s-7.397 3.317-7.397 7.397S16.321 27.9 20.4 27.9s7.397-3.318 7.397-7.397Z"
      />
    </g>
    <defs>
      <clipPath id="recived-icon_svg__b">
        <path fill="#fff" d="M4.4 4.5h32v32h-32z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecivedIcon;
