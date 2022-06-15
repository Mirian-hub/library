import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAg = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#AG_svg__a)">
      <path
        d="M0 24c0 1.644.166 3.25.48 4.8L24 30.26l23.52-1.46c.314-1.55.48-3.156.48-4.8 0-1.644-.166-3.25-.48-4.8L24 17.74.48 19.2A24.103 24.103 0 0 0 0 24Z"
        fill="#0052B4"
      />
      <path
        d="M47.52 28.8H.48C2.705 39.755 12.39 48 24 48s21.296-8.245 23.52-19.2Z"
        fill="#F0F0F0"
      />
      <path
        d="M.48 19.2h47.04C45.296 8.245 35.61 0 24 0 12.39 0 2.704 8.245.48 19.2Z"
        fill="#000"
      />
      <path
        d="M34.435 19.2h-20.87l4.264-2.006-2.27-4.129 4.63.886.586-4.678L24 12.713l3.225-3.44.586 4.678 4.63-.886-2.27 4.13 4.264 2.005Z"
        fill="#FFDA44"
      />
      <path
        d="M0 24c0 13.255 10.745 24 24 24L4.8 9.6A23.893 23.893 0 0 0 0 24ZM24 48c13.255 0 24-10.745 24-24 0-5.403-1.786-10.39-4.8-14.4L24 48Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="AG_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAg;
