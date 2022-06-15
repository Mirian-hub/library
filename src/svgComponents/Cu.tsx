import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCu = ({
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
    <g clipPath="url(#CU_svg__a)">
      <path d="M.001 4.174H0v39.652h.001V4.174Z" fill="#FF9811" />
      <path
        d="M24 48c13.255 0 24-10.744 24-24C48 10.747 37.255.002 24 .002s-24 10.745-24 24 10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C16.148 0 9.178 3.771 4.8 9.6H43.2C38.823 3.771 31.851 0 24.001 0ZM24 48c7.852 0 14.823-3.771 19.201-9.6H4.8C9.178 44.23 16.15 48 24 48ZM.001 24c0 1.644.166 3.25.48 4.8h47.04c.314-1.55.48-3.156.48-4.8 0-1.644-.166-3.249-.48-4.8H.48a24.103 24.103 0 0 0-.48 4.8Z"
        fill="#0052B4"
      />
      <path
        d="M7.03 7.03c-9.373 9.372-9.373 24.568 0 33.94L24 24 7.03 7.03Z"
        fill="#D80027"
      />
      <path
        d="m9.713 17.74 1.554 4.782h5.03l-4.069 2.956 1.554 4.783-4.069-2.956-4.068 2.956 1.554-4.783-4.069-2.956h5.03l1.553-4.783Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="CU_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCu;
