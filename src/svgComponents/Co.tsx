import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCo = ({
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
    <g clipPath="url(#CO_svg__a)">
      <path
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24l-24 2.087L0 24Z"
        fill="#FFDA44"
      />
      <path
        d="M3.212 36C7.362 43.173 15.117 48 24 48c8.883 0 16.639-4.827 20.789-12L24 34.435 3.212 36Z"
        fill="#D80027"
      />
      <path
        d="M44.788 36A23.889 23.889 0 0 0 48 24H0c0 4.372 1.17 8.47 3.212 12h41.576Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="CO_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCo;
