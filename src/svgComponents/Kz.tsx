import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKz = ({
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
      fill="#338AF3"
    />
    <path
      d="M37.565 24.26h-27.13c0 1.874 1.63 3.392 3.503 3.392h-.113a3.391 3.391 0 0 0 3.392 3.392 3.391 3.391 0 0 0 3.391 3.39h6.783a3.391 3.391 0 0 0 3.391-3.39 3.391 3.391 0 0 0 3.391-3.392h-.113c1.873 0 3.505-1.518 3.505-3.391Z"
      fill="#FFDA44"
    />
    <path d="M33.391 19.826a9.391 9.391 0 0 1-18.782 0" fill="#338AF3" />
    <path
      d="m31.174 19.826-2.931 1.379 1.56 2.839-3.182-.61-.404 3.216-2.216-2.365-2.218 2.365-.403-3.215-3.182.608 1.56-2.838-2.93-1.379 2.93-1.379-1.56-2.838 3.182.609.404-3.216L24 15.367l2.218-2.365.403 3.216 3.183-.61-1.561 2.84 2.93 1.378Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgKz;
