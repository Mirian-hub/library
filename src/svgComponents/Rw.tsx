import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRw = ({
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
      d="M0 24c0 4.158 1.058 8.069 2.918 11.478L24 37.565l21.082-2.087A23.893 23.893 0 0 0 48 24l-24-2.087L0 24Z"
      fill="#FFDA44"
    />
    <path
      d="M45.082 12.522C41.012 5.062 33.097 0 24 0 14.903 0 6.989 5.061 2.918 12.522A23.893 23.893 0 0 0 0 24h48c0-4.158-1.058-8.069-2.918-11.478Z"
      fill="#338AF3"
    />
    <path
      d="M24 48c9.097 0 17.011-5.062 21.082-12.522H2.918C6.988 42.938 14.903 48 24 48Z"
      fill="#496E2D"
    />
    <path
      d="m27.13 14.046 2.932 1.379-1.56 2.838 3.182-.609.403 3.216 2.217-2.365 2.217 2.365.403-3.216 3.183.609-1.56-2.839 2.93-1.378-2.93-1.379 1.56-2.839-3.183.61-.403-3.216-2.217 2.365-2.217-2.365-.403 3.215-3.183-.609 1.56 2.84-2.93 1.378Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgRw;
