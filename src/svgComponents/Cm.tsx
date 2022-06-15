import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCm = ({
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
    <g clipPath="url(#CM_svg__a)">
      <path
        d="M34.435 2.381A23.905 23.905 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619A23.907 23.907 0 0 0 24 48c3.74 0 7.28-.856 10.435-2.381L36.522 24 34.435 2.381Z"
        fill="#D80027"
      />
      <path
        d="m24 15.652 2.072 6.377h6.705l-5.424 3.942 2.072 6.377L24 28.406l-5.425 3.942 2.072-6.377-5.424-3.942h6.705L24 15.652Z"
        fill="#FFDA44"
      />
      <path
        d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382Z"
        fill="#496E2D"
      />
      <path
        d="M34.435 2.382v43.236C42.463 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="CM_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCm;
