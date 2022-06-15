import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIm = ({
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
      fill="#D80027"
    />
    <path
      d="m32.887 16.089-1.696 6.053-5.09-.94-3.276-6.753-8.851 3.14-.698-1.966-2.316-.285 1.745 4.917 6.091-1.558 1.731 4.878-4.21 6.214 7.145 6.094-1.354 1.588.91 2.148 3.386-3.97-4.394-4.496 3.359-3.938 7.486.54 1.706-9.235 2.052.379 1.405-1.863-5.131-.947Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgIm;
