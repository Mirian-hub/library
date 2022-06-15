import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGm = ({
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
      d="M24 0C14.078 0 5.563 6.021 1.908 14.609h44.185C42.438 6.02 33.923 0 24 0Z"
      fill="#A2001D"
    />
    <path
      d="M24 48c9.922 0 18.438-6.021 22.093-14.609H1.908C5.563 41.98 14.078 48 24 48Z"
      fill="#496E2D"
    />
    <path
      d="M47.173 17.739H.827A24.027 24.027 0 0 0 0 24c0 2.166.289 4.265.827 6.26h46.346c.538-1.995.827-4.094.827-6.26 0-2.166-.289-4.265-.827-6.261Z"
      fill="#0052B4"
    />
  </svg>
);

export default SvgGm;
