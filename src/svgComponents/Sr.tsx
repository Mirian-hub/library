import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSr = ({
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
      fill="#F0F0F0"
    />
    <path
      d="M46.507 15.652H1.493A23.951 23.951 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348h45.014A23.946 23.946 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348Z"
      fill="#A2001D"
    />
    <path
      d="M24.069 48c8.22 0 15.474-4.134 19.8-10.435h-39.6C8.595 43.866 15.85 48 24.07 48ZM24.069 0c8.22 0 15.474 4.134 19.8 10.435h-39.6C8.595 4.134 15.85 0 24.07 0Z"
      fill="#6DA544"
    />
    <path
      d="m24 15.652 2.071 6.377h6.706l-5.425 3.942 2.072 6.377-5.425-3.941-5.425 3.94 2.072-6.376-5.424-3.942h6.705L24 15.652Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgSr;
