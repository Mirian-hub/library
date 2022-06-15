import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVa = ({
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
      d="M24 0c13.254 0 24 10.745 24 24S37.254 48 24 48c0-1.043-3.13-24-3.13-24L24 0Z"
      fill="#F0F0F0"
    />
    <path d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0" fill="#FFDA44" />
    <path
      d="m33.19 20.884 4.511 5.967a3.13 3.13 0 1 0 1.665-1.258l-7.03-9.3-1.664 1.259-2.498 1.887 2.517 3.33 2.5-1.885Zm6.494 6.86a1.044 1.044 0 1 1 1.259 1.665 1.044 1.044 0 0 1-1.259-1.665Z"
      fill="#ACABB1"
    />
    <path
      d="m40.928 22.769 2.517-3.33-2.497-1.887-1.665-1.259-7.03 9.3a3.131 3.131 0 1 0 1.665 1.258l4.51-5.967 2.5 1.885Zm-8.79 6.437a1.043 1.043 0 1 1-1.664-1.259 1.043 1.043 0 0 1 1.664 1.259Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgVa;
