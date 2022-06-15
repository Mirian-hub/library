import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSb = ({
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
    <g clipPath="url(#SB_svg__a)">
      <path
        d="M40.971 40.971c9.001-9 9.357-23.371 1.07-32.799L24.001 24 8.171 42.04c9.428 8.287 23.798 7.931 32.8-1.07Z"
        fill="#496E2D"
      />
      <path
        d="M7.03 7.029c9-9.001 23.37-9.357 32.798-1.07L24 24 5.96 39.828C-2.328 30.4-1.973 16.03 7.03 7.028Z"
        fill="#0052B4"
      />
      <path
        d="M39.827 5.959 5.958 39.828c.343.39.698.771 1.07 1.143.372.372.754.728 1.144 1.07L42.041 8.172a24.3 24.3 0 0 0-1.07-1.143 24.338 24.338 0 0 0-1.144-1.07Z"
        fill="#FFDA44"
      />
      <path
        d="m10.113 8.347.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.519-1.594-1.357-.985h1.677l.518-1.595ZM18.675 8.347l.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595ZM10.113 16.695l.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.519-1.594-1.357-.985h1.677l.518-1.595ZM18.675 16.695l.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595ZM14.393 12.521l.519 1.595h1.676l-1.356.985.518 1.594-1.357-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="SB_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSb;
