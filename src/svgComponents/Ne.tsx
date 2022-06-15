import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNe = ({
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
    <g clipPath="url(#NE_svg__a)">
      <path
        d="M2.381 13.565A23.905 23.905 0 0 0 0 24c0 3.74.856 7.28 2.381 10.435L24 36.522l21.619-2.087A23.905 23.905 0 0 0 48 24c0-3.74-.856-7.28-2.381-10.435L24 11.478 2.381 13.565Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.383 34.435C6.265 42.463 14.485 48 24 48c9.516 0 17.736-5.537 21.618-13.565H2.383Z"
        fill="#6DA544"
      />
      <path
        d="M2.383 13.565h43.235C41.736 5.537 33.516 0 24 0 14.486 0 6.265 5.537 2.383 13.565ZM24 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="NE_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNe;
