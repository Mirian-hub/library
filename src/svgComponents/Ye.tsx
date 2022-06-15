import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgYe = ({
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
    <g clipPath="url(#YE_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24.001 48c10.32 0 19.116-6.513 22.507-15.652H1.494C4.884 41.487 13.682 48 24 48Z"
        fill="#000"
      />
      <path
        d="M24.001 0C13.681 0 4.885 6.513 1.494 15.652h45.014C43.118 6.513 34.32 0 24.001 0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="YE_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgYe;
