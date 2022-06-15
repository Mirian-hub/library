import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIl = ({
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
      d="M33.036 18.783h-6.024L24 13.565l-3.012 5.218h-6.025L17.975 24l-3.012 5.217h6.025L24 34.435l3.012-5.218h6.024L30.024 24l3.012-5.217ZM27.7 24l-1.85 3.205h-3.7L20.298 24l1.85-3.205h3.701L27.7 24ZM24 17.59l.688 1.193h-1.377L24 17.59Zm-5.552 3.205h1.378l-.689 1.193-.689-1.193Zm0 6.41.69-1.193.688 1.193h-1.378ZM24 30.41l-.689-1.193h1.377L24 30.41Zm5.55-3.205h-1.376l.688-1.193.689 1.193Zm-1.376-6.41h1.377l-.689 1.193-.688-1.193ZM38.94 5.217H9.06a24.121 24.121 0 0 0-5.538 6.261h40.955a24.125 24.125 0 0 0-5.537-6.26ZM9.06 42.783h29.88a24.12 24.12 0 0 0 5.537-6.261H3.522a24.127 24.127 0 0 0 5.538 6.26Z"
      fill="#0052B4"
    />
  </svg>
);

export default SvgIl;
