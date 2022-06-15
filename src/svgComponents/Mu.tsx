import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMu = ({
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
      d="M2.918 12.522 24 14.609l21.082-2.087C41.012 5.062 33.097 0 24 0 14.903 0 6.99 5.061 2.918 12.522Z"
      fill="#D80027"
    />
    <path
      d="M2.918 35.478 24 37.565l21.082-2.087A23.893 23.893 0 0 0 48 24l-24-2.087L0 24c0 4.158 1.058 8.069 2.918 11.478Z"
      fill="#FFDA44"
    />
    <path
      d="M2.918 12.522A23.893 23.893 0 0 0 0 24h48c0-4.158-1.058-8.068-2.918-11.478H2.918Z"
      fill="#0052B4"
    />
    <path
      d="M24 48c9.097 0 17.011-5.062 21.082-12.522H2.918C6.988 42.938 14.903 48 24 48Z"
      fill="#6DA544"
    />
  </svg>
);

export default SvgMu;
