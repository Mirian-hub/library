import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPy = ({
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
    <g clipPath="url(#PY_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C14.485 0 6.263 5.537 2.38 13.565h43.237C41.736 5.537 33.515 0 24 0Z"
        fill="#D80027"
      />
      <path
        d="M24 48c9.515 0 17.736-5.537 21.618-13.565H2.381C6.263 42.463 14.485 48 24 48Z"
        fill="#0052B4"
      />
      <path
        d="m29.904 17.054-2.214 2.213a5.217 5.217 0 1 1-7.378 0l-2.214-2.213a8.348 8.348 0 1 0 11.805 0Z"
        fill="#6DA544"
      />
      <path
        d="m24 19.826.777 2.392h2.514l-2.034 1.477.777 2.392L24 24.609l-2.035 1.478.777-2.392-2.034-1.477h2.514L24 19.826Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="PY_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPy;
