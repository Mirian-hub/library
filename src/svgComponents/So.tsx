import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSo = ({
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
      d="m24 12.522 2.59 7.971h8.382L28.19 25.42l2.59 7.971-6.78-4.926-6.782 4.926 2.59-7.971-6.78-4.927h8.381L24 12.522Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgSo;
