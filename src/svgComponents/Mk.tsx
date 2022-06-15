import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMk = ({
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
      fill="#FFDA44"
    />
    <path
      d="M27.65 47.724a23.871 23.871 0 0 0 10.543-4.37L24 24l3.65 23.724ZM20.349.276a23.874 23.874 0 0 0-10.543 4.37L23.999 24 20.349.276ZM9.806 43.354a23.875 23.875 0 0 0 10.543 4.37L23.999 24 9.806 43.354Z"
      fill="#D80027"
    />
    <path
      d="M4.646 9.807A23.874 23.874 0 0 0 .276 20.35L24 24 4.646 9.807ZM.276 27.65a23.871 23.871 0 0 0 4.37 10.543L24 24 .276 27.65ZM47.724 20.35a23.873 23.873 0 0 0-4.37-10.543L24 24l23.724-3.65ZM38.193 4.646A23.872 23.872 0 0 0 27.65.276L24 24 38.193 4.646ZM43.354 38.193a23.875 23.875 0 0 0 4.37-10.543L24 24l19.354 14.193Z"
      fill="#D80027"
    />
    <path
      d="M24 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z"
      fill="#D80027"
    />
    <path
      d="M24 30.26a6.26 6.26 0 1 0 0-12.52 6.26 6.26 0 0 0 0 12.52Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgMk;
