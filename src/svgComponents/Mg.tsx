import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMg = ({
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
    <g clipPath="url(#MG_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M15.652 24v22.507C18.252 47.472 21.064 48 24 48c13.255 0 24-10.745 24-24s-32.348 0-32.348 0Z"
        fill="#6DA544"
      />
      <path
        d="M24 0c-2.936 0-5.748.528-8.348 1.493V24H48C48 10.745 37.255 0 24 0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="MG_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMg;
