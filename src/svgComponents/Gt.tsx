import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGt = ({
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
    <g clipPath="url(#GT_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M48 24c0-9.515-5.537-17.737-13.565-21.619v43.237C42.463 41.737 48 33.515 48 24ZM0 24c0 9.515 5.537 17.737 13.565 21.619V2.38C5.537 6.263 0 14.485 0 24Z"
        fill="#338AF3"
      />
      <path
        d="M30.272 28.058 26.214 24l3.863-3.863-.175-2.04-1.106-1.106L24 21.786l-4.795-4.795-1.106 1.106-.175 2.04L21.787 24l-4.058 4.058 2.213 2.214L24 26.214l4.058 4.058 2.214-2.214Z"
        fill="#ACABB1"
      />
      <path
        d="m29.903 18.097-2.214 2.214a5.217 5.217 0 1 1-7.378 0l-2.214-2.214a8.348 8.348 0 1 0 11.805 0Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="GT_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGt;
