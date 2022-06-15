import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGy = ({
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
    <g clipPath="url(#GY_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0a23.888 23.888 0 0 0-11.688 3.035v41.93A23.888 23.888 0 0 0 24 48c13.255 0 24-10.745 24-24S37.254 0 24 0Z"
        fill="#6DA544"
      />
      <path
        d="M12.384 2.995A24.052 24.052 0 0 0 8.57 5.62L26.951 24 8.571 42.381a24.234 24.234 0 0 1 3.813 2.624L48 24 12.384 2.995Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.356 4.255A24.144 24.144 0 0 0 8.251 5.89L24 24 8.25 42.11c.67.583 1.373 1.129 2.105 1.635L43.891 24 10.356 4.255Z"
        fill="#FFDA44"
      />
      <path
        d="M8.57 5.619a24.17 24.17 0 0 0-1.541 1.41L21.913 24 7.029 40.97c.492.493 1.007.963 1.54 1.411L26.952 24 8.57 5.619Z"
        fill="#000"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="GY_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGy;
