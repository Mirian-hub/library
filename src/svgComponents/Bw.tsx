import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBw = ({
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
    <g clipPath="url(#BW_svg__a)">
      <path
        d="M1.134 16.695A23.979 23.979 0 0 0 .001 24c0 2.547.398 5 1.133 7.304l22.867 1.044 22.867-1.044A23.985 23.985 0 0 0 48 24c0-2.547-.398-5.001-1.133-7.305L24 15.652 1.134 16.695Z"
        fill="#F0F0F0"
      />
      <path
        d="M48 24c0-1.424-.125-2.818-.362-4.174H.363a24.128 24.128 0 0 0 0 8.348h47.275c.237-1.356.362-2.75.362-4.174Z"
        fill="#000"
      />
      <path
        d="M24 48c10.709 0 19.777-7.013 22.867-16.696H1.135C4.224 40.987 13.294 48 24.001 48ZM24 .001C13.292.001 4.224 7.014 1.133 16.696h45.733C43.776 7.014 34.708.002 24 .002Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="BW_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBw;
