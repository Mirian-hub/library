import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNl = ({
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
    <g clipPath="url(#NL_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C13.68 0 4.882 6.513 1.491 15.652h45.015C43.116 6.513 34.319 0 23.999 0Z"
        fill="#A2001D"
      />
      <path
        d="M24 48c10.319 0 19.116-6.513 22.507-15.652H1.492C4.883 41.487 13.68 48 24 48Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="NL_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNl;
