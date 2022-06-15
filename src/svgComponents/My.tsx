import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMy = ({
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
    <g clipPath="url(#MY_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M22.957 24h25.044c0-2.166-.289-4.265-.827-6.26H22.957V24ZM22.957 11.478h21.521a24.127 24.127 0 0 0-5.537-6.26H22.957v6.26ZM24 48c5.649 0 10.84-1.952 14.94-5.217H9.06A23.897 23.897 0 0 0 24 48ZM3.523 36.522h40.955a23.858 23.858 0 0 0 2.696-6.261H.827a23.855 23.855 0 0 0 2.696 6.26Z"
        fill="#D80027"
      />
      <path d="M24 24V0C10.745 0 0 10.745 0 24h24Z" fill="#0052B4" />
      <path
        d="M15.96 20.543a5.935 5.935 0 1 1 2.823-11.156 7.304 7.304 0 1 0 0 10.443 5.91 5.91 0 0 1-2.823.713Z"
        fill="#FFDA44"
      />
      <path
        d="m17.633 10.435 1.053 2.203 2.38-.55L20 14.286l1.914 1.517-2.383.537.007 2.443-1.905-1.528-1.906 1.528.007-2.443-2.383-.537 1.914-1.517-1.066-2.198 2.38.55 1.053-2.203Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="MY_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMy;
