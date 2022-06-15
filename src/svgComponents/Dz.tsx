import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDz = ({
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
      d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48c0-1.043-3.13-24-3.13-24L24 0Z"
      fill="#F0F0F0"
    />
    <path d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0" fill="#496E2D" />
    <path
      d="m29.157 19.396-1.97 2.714-3.189-1.034 1.973 2.711L24 26.501l3.189-1.038 1.972 2.711-.002-3.353 3.188-1.038-3.19-1.034-.001-3.352Z"
      fill="#D80027"
    />
    <path
      d="M25.991 30.783a6.783 6.783 0 1 1 3.226-12.75 8.348 8.348 0 1 0 0 11.935 6.75 6.75 0 0 1-3.226.815Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgDz;
