import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLs = ({
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
    <g clipPath="url(#LS_svg__a)">
      <path
        d="M0 24c0 3.74.856 7.28 2.381 10.435L24 35.478l21.619-1.043A23.906 23.906 0 0 0 48 24c0-3.74-.856-7.28-2.381-10.435L24 12.522 2.381 13.565A23.905 23.905 0 0 0 0 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 48c9.515 0 17.736-5.537 21.618-13.565H2.381C6.263 42.463 14.485 48 24 48Z"
        fill="#6DA544"
      />
      <path
        d="M24 0C14.485 0 6.263 5.537 2.38 13.565h43.237C41.736 5.537 33.515 0 24 0Z"
        fill="#0052B4"
      />
      <path
        d="M25.566 23.478V17.74h-3.13v5.74l-3.782 3.78A6.257 6.257 0 0 0 24 30.261a6.257 6.257 0 0 0 5.347-3.002l-3.781-3.78Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="LS_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLs;
