import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMd = ({
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
    <path
      d="M34.436 2.381A23.905 23.905 0 0 0 24.001 0c-3.74 0-7.28.856-10.435 2.381L11.48 24l2.086 21.619A23.907 23.907 0 0 0 24.002 48c3.74 0 7.28-.856 10.435-2.381L36.523 24 34.436 2.381Z"
      fill="#FFDA44"
    />
    <path
      d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382Z"
      fill="#0052B4"
    />
    <path
      d="M34.434 2.382v43.236C42.462 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z"
      fill="#D80027"
    />
    <path
      d="M32.348 18.883h-5.74a2.609 2.609 0 0 0-5.217 0h-5.739c0 1.419 1.236 2.568 2.654 2.568h-.085a2.569 2.569 0 0 0 2.568 2.569c0 1.256.902 2.3 2.094 2.523l-2.024 4.57c.97.393 2.03.613 3.141.613 1.111 0 2.171-.22 3.141-.614l-2.024-4.57a2.568 2.568 0 0 0 2.094-2.522 2.569 2.569 0 0 0 2.568-2.569h-.085c1.418 0 2.654-1.15 2.654-2.568Z"
      fill="#FF9811"
    />
    <path
      d="M24.002 22.435 20.61 24v3.13l3.392 2.087 3.39-2.087V24l-3.39-1.565Z"
      fill="#0052B4"
    />
    <path d="M27.393 20.87H20.61V24h6.783v-3.13Z" fill="#D80027" />
  </svg>
);

export default SvgMd;