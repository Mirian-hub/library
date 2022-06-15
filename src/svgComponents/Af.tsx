import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAf = ({
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
    <g clipPath="url(#AF_svg__a)">
      <path
        d="M34.435 2.381A23.905 23.905 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619A23.907 23.907 0 0 0 24 48c3.74 0 7.28-.856 10.435-2.381L36.522 24 34.435 2.381Z"
        fill="#D80027"
      />
      <path
        d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382Z"
        fill="#000"
      />
      <path
        d="M34.435 2.382v43.236C42.463 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z"
        fill="#496E2D"
      />
      <path
        d="M24 15.652a8.348 8.348 0 1 0 0 16.696 8.348 8.348 0 0 0 0-16.696Zm0 13.565a5.217 5.217 0 1 1 0-10.435 5.217 5.217 0 0 1 0 10.435Z"
        fill="#FFDA44"
      />
      <path
        d="M24 20.87a2.087 2.087 0 0 0-2.087 2.087v3.13h4.174v-3.13A2.087 2.087 0 0 0 24 20.87Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="AF_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAf;
