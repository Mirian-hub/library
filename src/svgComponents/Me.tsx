import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMe = ({
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
      fill="#FFDA44"
    />
    <path
      d="M48 24c0-8.237-4.15-15.504-10.473-19.826H10.473C4.15 8.496 0 15.764 0 24c0 8.237 4.15 15.504 10.473 19.826h27.054C43.85 39.504 48 32.237 48 24Z"
      fill="#A2001D"
    />
    <path
      d="M18.782 17.739h10.435v-4.174L27.13 14.61 24 11.479l-3.131 3.13-2.087-1.044v4.174ZM33.391 24h-5.215a2.408 2.408 0 1 0-4.207-2.338A2.407 2.407 0 1 0 19.76 24h-5.153c0 1.596 1.39 2.89 2.986 2.89h-.096a2.89 2.89 0 0 0 2.064 2.769l-2.345 2.345 2.213 2.214 3.14-3.14c.123.045.25.081.382.106l-1.897 4.284c.91.37 1.903.575 2.945.575a7.799 7.799 0 0 0 2.945-.575l-1.898-4.284c.132-.025.259-.061.382-.106l3.14 3.14 2.213-2.214-2.345-2.345a2.89 2.89 0 0 0 2.064-2.77h-.096c1.596 0 2.986-1.293 2.986-2.89Z"
      fill="#FFDA44"
    />
    <path
      d="m24 25.565-3.392 1.565v3.13L24 32.349l3.391-2.087v-3.13L24 25.564Z"
      fill="#6DA544"
    />
    <path d="M27.391 24H20.61v4.174h6.782V24Z" fill="#0052B4" />
  </svg>
);

export default SvgMe;
