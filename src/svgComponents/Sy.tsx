import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSy = ({
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
    <g clipPath="url(#SY_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C13.68 0 4.882 6.513 1.491 15.652h45.015C43.115 6.513 34.318 0 23.999 0Z"
        fill="#D80027"
      />
      <path
        d="M24 48c10.318 0 19.115-6.513 22.507-15.652H1.492C4.883 41.487 13.68 48 24 48Z"
        fill="#000"
      />
      <path
        d="m14.34 18.26 1.296 3.986h4.19l-3.39 2.464 1.295 3.986-3.39-2.464-3.39 2.464 1.294-3.986-3.39-2.464h4.19l1.296-3.985ZM33.66 18.26l1.295 3.986h4.191l-3.39 2.464 1.295 3.986-3.39-2.464-3.391 2.464 1.295-3.986-3.39-2.464h4.19l1.295-3.985Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="SY_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSy;
