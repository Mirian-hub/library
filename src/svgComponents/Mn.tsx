import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMn = ({
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
      d="M24 48c2.936 0 5.748-.528 8.348-1.493L33.39 24 32.348 1.493A23.95 23.95 0 0 0 24 0c-2.936 0-5.748.528-8.348 1.493L14.61 24l1.043 22.507C18.252 47.472 21.064 48 24 48Z"
      fill="#0052B4"
    />
    <path
      d="M0 24c0 10.32 6.513 19.116 15.652 22.507V1.493C6.513 4.883 0 13.68 0 24ZM32.348 1.493v45.014C41.487 43.117 48 34.32 48 24c0-10.32-6.513-19.116-15.652-22.507Z"
      fill="#A2001D"
    />
    <path
      d="M13.565 24h-2.087v8.348h2.087V24ZM5.218 24H3.13v8.348h2.087V24ZM8.348 29.218a2.087 2.087 0 1 0 0-4.174 2.087 2.087 0 0 0 0 4.174ZM8.349 20.87a1.043 1.043 0 1 0 0-2.087 1.043 1.043 0 0 0 0 2.087ZM10.435 30.26H6.26v2.088h4.174V30.26ZM10.435 21.913H6.26V24h4.174v-2.087ZM8.347 12.522l.74 2.274h2.391l-1.935 1.406.739 2.274-1.935-1.405-1.934 1.405.739-2.274-1.935-1.406h2.391l.74-2.274Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgMn;
