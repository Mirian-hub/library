import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTl = ({
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
    <g clipPath="url(#TL_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <path
        d="M24 0A23.901 23.901 0 0 0 8.57 5.619L34.435 24 8.57 42.381A23.901 23.901 0 0 0 24 48c13.255 0 24-10.745 24-24S37.255 0 24 0Z"
        fill="#D80027"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#000"
      />
      <path
        d="m6.654 18.502 3.652 3.457 4.417-2.406-2.159 4.542 3.653 3.457-4.987-.65-2.159 4.542-.923-4.943-4.987-.65 4.416-2.406-.923-4.943Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="TL_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTl;
