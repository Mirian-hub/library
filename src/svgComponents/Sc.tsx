import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSc = ({
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
    <g clipPath="url(#SC_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M40.2 6.294A23.912 23.912 0 0 0 24 0c-1.023 0-2.03.064-3.019.188L9.391 13.565.759 30.012a23.853 23.853 0 0 0 2.51 6.086L24 24 40.2 6.294Z"
        fill="#FFDA44"
      />
      <path
        d="m43.981 37.297-33.578 6.48A23.887 23.887 0 0 0 24 48c8.337 0 15.679-4.25 19.981-10.703Z"
        fill="#6DA544"
      />
      <path
        d="M40.205 6.297 3.284 36.121a24.092 24.092 0 0 0 3.439 4.535L48 24c0-7.009-3.005-13.315-7.796-17.703Z"
        fill="#D80027"
      />
      <path
        d="M0 24c0 2.076.264 4.09.76 6.012L20.981.188C9.152 1.673 0 11.768 0 24Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="SC_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSc;
