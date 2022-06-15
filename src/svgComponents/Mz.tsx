import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMz = ({
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
    <g clipPath="url(#MZ_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.973 33.391 7.03 40.97A23.922 23.922 0 0 0 24 48c9.921 0 18.435-6.022 22.09-14.609H12.973Z"
        fill="#FFDA44"
      />
      <path
        d="M46.128 14.696C42.494 6.062 33.956 0 24.001 0A23.922 23.922 0 0 0 7.03 7.03l6.01 7.666h33.087Z"
        fill="#496E2D"
      />
      <path
        d="M5.217 17.652v12.609h41.956C47.711 28.265 48 26.166 48 24c0-2.198-.296-4.326-.85-6.348H5.217Z"
        fill="#000"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#A2001D"
      />
      <path
        d="m9.714 17.74 1.554 4.782h5.029l-4.069 2.956 1.554 4.783-4.068-2.956-4.069 2.956L7.2 25.478l-4.068-2.956H8.16l1.554-4.783Z"
        fill="#FFDA44"
      />
      <path d="M14.262 24H5.166v4.174h9.096V24Z" fill="#F0F0F0" />
      <path
        d="m15.984 19.215-1.476-1.476-4.795 4.795-4.795-4.795-1.476 1.476 4.8 4.79-4.8 4.8 1.476 1.456 4.795-4.787 4.795 4.787 1.476-1.456-4.8-4.8 4.8-4.79Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="MZ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMz;
