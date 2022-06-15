import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTh = ({
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
      d="M46.507 15.652H1.493A23.947 23.947 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348h45.014A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348Z"
      fill="#0052B4"
    />
    <path
      d="M24 0C16.726 0 10.208 3.237 5.806 8.348h36.387C37.792 3.237 31.273 0 24 0ZM42.193 39.652H5.806C10.208 44.763 16.726 48 24 48c7.274 0 13.792-3.237 18.193-8.348Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgTh;
