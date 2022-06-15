import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBr = ({
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
      fill="#6DA544"
    />
    <path d="M24 9.391 43.826 24 24 38.609 4.174 24 24 9.391Z" fill="#FFDA44" />
    <path
      d="M24 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z"
      fill="#F0F0F0"
    />
    <path
      d="M19.826 23.478c-1.452 0-2.853.221-4.171.63a8.347 8.347 0 0 0 15.181 4.68c-2.583-3.234-6.558-5.31-11.01-5.31ZM32.193 25.6a8.348 8.348 0 0 0-15.864-4.894 17.22 17.22 0 0 1 3.497-.358c4.849 0 9.235 2.015 12.367 5.251Z"
      fill="#0052B4"
    />
  </svg>
);

export default SvgBr;
