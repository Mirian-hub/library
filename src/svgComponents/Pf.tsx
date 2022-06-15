import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPf = ({
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
      d="M2.918 12.522h42.164C41.012 5.062 33.097 0 24 0 14.903 0 6.99 5.061 2.918 12.522ZM24 48c9.097 0 17.011-5.062 21.082-12.522H2.918C6.988 42.938 14.903 48 24 48Z"
      fill="#D80027"
    />
    <path
      d="M32.348 24c0 4.61-3.738 7.304-8.348 7.304-4.61 0-8.348-2.694-8.348-7.304a8.348 8.348 0 1 1 16.696 0Z"
      fill="#FFDA44"
    />
    <path d="M32.348 24a8.348 8.348 0 0 1-16.696 0" fill="#0052B4" />
    <path
      d="M20.87 21.913h-2.087v4.174h2.087v-4.174ZM29.218 21.913H27.13v4.174h2.087v-4.174ZM25.044 18.783h-2.088v7.304h2.088v-7.304Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgPf;
