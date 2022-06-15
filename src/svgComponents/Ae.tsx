import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAe = ({
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
    <g clipPath="url(#AE_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="m13.566 32.348 2.087 14.16C18.253 47.471 21.065 48 24 48c10.319 0 19.116-6.513 22.507-15.652H13.566Z"
        fill="#000"
      />
      <path
        d="m13.566 15.652 2.087-14.16A23.946 23.946 0 0 1 24 0C34.32 0 43.117 6.513 46.508 15.652H13.566Z"
        fill="#6DA544"
      />
      <path
        d="M0 24c0 10.32 6.513 19.116 15.652 22.507V1.493C6.513 4.883 0 13.68 0 24Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="AE_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAe;
