import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCy = ({
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
      fill="#FCFCFC"
    />
    <path
      d="M37.566 20.87h-3.13c0 5.763-4.673 10.434-10.436 10.434S13.566 26.633 13.566 20.87h-3.13c0 6.207 4.169 11.441 9.86 13.053a3.472 3.472 0 0 0 .363 3.79l3.411-2.734 3.411 2.734c.9-1.123.989-2.635.344-3.826 5.63-1.651 9.74-6.854 9.74-13.017Z"
      fill="#6DA544"
    />
    <path
      d="M15.652 19.826s0 5.218 5.218 5.218l1.043 1.043H24s1.043-3.13 3.13-3.13c0 0 0-2.087 2.087-2.087h3.13s-1.043-4.174 4.175-7.305l-2.087-1.043s-7.305 5.217-12.522 4.174v2.087h-2.087l-1.043-1.044-3.13 2.087Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgCy;
