import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNr = ({
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
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#0052B4"
    />
    <path
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#FFDA44"
    />
    <path
      d="M23.998 0C11.447 0 1.148 9.636.09 21.913h47.817C46.85 9.636 36.55 0 23.998 0ZM23.998 48c12.552 0 22.851-9.636 23.91-21.913H.09C1.148 38.364 11.447 48 23.998 48Z"
      fill="#0052B4"
    />
    <path
      d="m19.828 32.348-2.69 1.265 1.432 2.604-2.92-.558-.37 2.95-2.034-2.17-2.034 2.17-.37-2.95-2.92.558 1.432-2.604-2.69-1.265 2.69-1.265-1.432-2.605 2.92.559.37-2.95 2.034 2.17 2.034-2.17.37 2.95 2.92-.559-1.431 2.605 2.689 1.265Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgNr;
