import * as React from "react";
import type { SVGProps } from "react";
const SvgRecivedCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <mask
      id="recived-check-icon_svg__a"
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
    <g fill="#fff" clipPath="url(#recived-check-icon_svg__b)">
      <path d="M20.4 25.43a4.927 4.927 0 1 0 0-9.854 4.927 4.927 0 0 0 0 9.853" />
      <path d="M35.91 19.138c-3.788-4.576-9.52-8.98-15.51-8.98s-11.725 4.407-15.509 8.98a2.14 2.14 0 0 0 0 2.73c.951 1.15 2.946 3.369 5.61 5.308 6.71 4.884 13.074 4.895 19.798 0 2.664-1.94 4.659-4.159 5.61-5.309a2.14 2.14 0 0 0 0-2.729M20.4 13.606a6.905 6.905 0 0 1 6.897 6.897A6.905 6.905 0 0 1 20.4 27.4a6.905 6.905 0 0 1-6.897-6.897 6.905 6.905 0 0 1 6.897-6.897" />
    </g>
    <defs>
      <clipPath id="recived-check-icon_svg__b">
        <path fill="#fff" d="M4.4 4.5h32v32h-32z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecivedCheckIcon;
