import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCg = ({
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
    <g clipPath="url(#CG_svg__a)">
      <path
        d="M13.01 45.342 30.641 30.64l14.7-17.631A24.107 24.107 0 0 0 35.005 2.666L17.36 17.359 2.666 35.004A24.104 24.104 0 0 0 13.01 45.342Z"
        fill="#FFDA44"
      />
      <path
        d="M40.971 40.971c7.572-7.572 9.026-18.943 4.364-27.976l-32.34 32.34c9.033 4.661 20.404 3.208 27.976-4.364Z"
        fill="#D80027"
      />
      <path
        d="M7.028 7.029C-.543 14.6-1.997 25.972 2.665 35.005l32.34-32.34C25.971-1.997 14.6-.543 7.027 7.029Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="CG_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCg;
