import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBh = ({
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
    <g clipPath="url(#BH_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0c-4.817 0-9.3 1.42-13.06 3.862L17.114 8l-7.722 4 7.722 4-7.722 4 7.722 4-7.722 4 7.722 4-7.722 4 7.722 4-6.173 4.138A23.885 23.885 0 0 0 24 48c13.255 0 24-10.745 24-24S37.255 0 24 0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="BH_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBh;
