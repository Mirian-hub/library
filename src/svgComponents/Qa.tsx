import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgQa = ({
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
    <g clipPath="url(#QA_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M48 24C48 10.745 37.255 0 24 0c-4.695 0-9.074 1.35-12.774 3.68l5.261 2.235L9.391 8.93l7.096 3.014-7.096 3.015 7.096 3.015-7.096 3.014 7.096 3.014-7.096 3.014 7.096 3.015-7.096 3.014 7.096 3.014-7.096 3.015 7.096 3.014-5.258 2.234A23.888 23.888 0 0 0 24 48c13.255 0 24-10.745 24-24Z"
        fill="#751A46"
      />
    </g>
    <defs>
      <clipPath id="QA_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgQa;
