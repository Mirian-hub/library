import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMr = ({
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
      fill="#496E2D"
    />
    <path
      d="M24 27.727a8.35 8.35 0 0 1-8.154-6.56 8.348 8.348 0 1 0 16.307 0A8.35 8.35 0 0 1 24 27.727Z"
      fill="#FFDA44"
    />
    <path
      d="m24 16.696.776 2.391h2.515l-2.034 1.478.777 2.391-2.035-1.477-2.034 1.477.777-2.39-2.034-1.479h2.514L24 16.696Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgMr;
