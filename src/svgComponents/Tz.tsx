import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTz = ({
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
    <g clipPath="url(#TZ_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <path
        d="M7.029 40.97a24.142 24.142 0 0 0 3.208 2.696l33.428-33.429a24.126 24.126 0 0 0-5.902-5.903L4.334 37.763A24.16 24.16 0 0 0 7.03 40.97Z"
        fill="#000"
      />
      <path
        d="M7.028 7.03C-.544 14.6-1.997 25.971 2.664 35.003L35.003 2.666C25.97-1.996 14.598-.542 7.027 7.029Z"
        fill="#6DA544"
      />
      <path
        d="M40.971 40.97c7.572-7.57 9.025-18.942 4.364-27.974L12.997 45.334c9.032 4.662 20.403 3.208 27.974-4.363Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="TZ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTz;
