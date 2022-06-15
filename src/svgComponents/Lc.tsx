import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLc = ({
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
    <path d="M15.13 32.348h17.74L24 11.478l-8.87 20.87Z" fill="#F3F3F3" />
    <path d="m18.214 30.26 5.787-13.163 5.787 13.164H18.214Z" fill="#333" />
    <path d="M15.13 32.348h17.74L24 24l-8.87 8.348Z" fill="#FFDA44" />
  </svg>
);

export default SvgLc;
