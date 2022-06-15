import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHt = ({
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
      d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 24 0 24 0s24 10.745 24 24Z"
      fill="#A2001D"
    />
    <path d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24" fill="#0052B4" />
    <path
      d="M32.348 30.26 24 29.218l-8.348 1.044V17.739h16.696v12.522Z"
      fill="#F0F0F0"
    />
    <path
      d="M24 29.217a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
      fill="#0052B4"
    />
    <path
      d="M24 27.13a2.087 2.087 0 1 0 0-4.174 2.087 2.087 0 0 0 0 4.174Z"
      fill="#A2001D"
    />
    <path d="M20.87 19.826h6.26L24 22.956l-3.13-3.13Z" fill="#6DA544" />
    <path d="M25.043 21.913h-2.087v6.26h2.087v-6.26Z" fill="#FFDA44" />
    <path
      d="M27.34 27.548h-6.68l-5.008 2.713h16.696l-5.009-2.713Z"
      fill="#6DA544"
    />
  </svg>
);

export default SvgHt;
