import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMt = ({
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
    <path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48" fill="#D80027" />
    <path
      d="M16.695 9.391v-3.13h-3.13v3.13h-3.13v3.13h3.13v3.131h3.13v-3.13h3.13v-3.13h-3.13Z"
      fill="#ACABB1"
    />
  </svg>
);

export default SvgMt;
