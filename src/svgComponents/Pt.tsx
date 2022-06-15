import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPt = ({
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
      d="M0 24c0 10.32 6.513 19.116 15.652 22.507L17.739 24 15.652 1.493C6.513 4.883 0 13.68 0 24Z"
      fill="#6DA544"
    />
    <path
      d="M48 24C48 10.745 37.255 0 24 0a23.95 23.95 0 0 0-8.348 1.493v45.014C18.252 47.472 21.064 48 24 48c13.255 0 24-10.745 24-24Z"
      fill="#D80027"
    />
    <path
      d="M15.652 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z"
      fill="#FFDA44"
    />
    <path
      d="M10.957 19.826v5.217a4.696 4.696 0 1 0 9.39 0v-5.217h-9.39Z"
      fill="#D80027"
    />
    <path
      d="M15.652 26.609a1.567 1.567 0 0 1-1.565-1.566v-2.086h3.13v2.087c0 .863-.702 1.565-1.564 1.565Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgPt;
