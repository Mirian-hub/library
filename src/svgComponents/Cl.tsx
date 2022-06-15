import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCl = ({
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
    <g clipPath="url(#CL_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24s24 0 24 0h24Z"
        fill="#D80027"
      />
      <path d="M0 24C0 10.745 10.745 0 24 0v24H0Z" fill="#0052B4" />
      <path
        d="m14.287 8.348 1.554 4.783h5.029L16.8 16.087l1.554 4.783-4.069-2.956-4.068 2.956 1.554-4.783-4.069-2.956h5.03l1.553-4.783Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="CL_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCl;
