import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBs = ({
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
    <g clipPath="url(#BS_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <path
        d="M14.609 15.652h31.898C43.117 6.513 34.32 0 24 0A23.922 23.922 0 0 0 7.03 7.03l7.579 8.622ZM14.609 32.348h31.898C43.117 41.487 34.32 48 24 48a23.922 23.922 0 0 1-16.97-7.03l7.579-8.622Z"
        fill="#338AF3"
      />
      <path
        d="M7.03 7.03c-9.373 9.372-9.373 24.568 0 33.94L24 24 7.03 7.03Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="BS_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBs;
