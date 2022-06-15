import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgZa = ({
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
    <g clipPath="url(#ZA_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.029 40.97c-9.373-9.372-9.373-24.568 0-33.94L20.869 24 7.03 40.97Z"
        fill="#000"
      />
      <path
        d="M20.87 24 3.183 12.048a23.915 23.915 0 0 0-1.447 2.978L10.69 24l-8.954 8.975a23.891 23.891 0 0 0 1.446 2.976L20.87 24Z"
        fill="#FFDA44"
      />
      <path
        d="M47.797 20.87H20.869L7.029 7.03a24.094 24.094 0 0 0-3.846 5.018L15.11 24 3.181 35.95a24.092 24.092 0 0 0 3.848 5.02l13.84-13.84h26.928a24.238 24.238 0 0 0 0-6.26Z"
        fill="#6DA544"
      />
      <path
        d="M9.387 43.038A23.893 23.893 0 0 0 24 48c11.089 0 20.42-7.52 23.174-17.74H22.165L9.387 43.039Z"
        fill="#0052B4"
      />
      <path
        d="M47.173 17.74C44.419 7.52 35.088 0 23.999 0A23.893 23.893 0 0 0 9.387 4.962l12.778 12.777h25.008Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="ZA_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgZa;
