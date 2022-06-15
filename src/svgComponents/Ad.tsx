import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAd = ({
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
    <g clipPath="url(#AD_svg__a)">
      <path
        d="M13.565 45.619A23.905 23.905 0 0 0 24 48c3.74 0 7.28-.856 10.435-2.381L36.522 24 34.435 2.381A23.905 23.905 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619Z"
        fill="#FFDA44"
      />
      <path
        d="M34.435 45.618C42.463 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618v43.236Z"
        fill="#D80027"
      />
      <path
        d="M13.565 45.618V2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618Z"
        fill="#0052B4"
      />
      <path
        d="M24 32.348V24h6.26v3.13c0 .544-1.043 2.537-3.618 4.174-.976.62-1.985.82-2.642 1.044ZM24 17.74h-6.26V24H24v-6.26Z"
        fill="#D80027"
      />
      <path
        d="M27.13 15.652A2.087 2.087 0 0 0 24 13.847a2.087 2.087 0 0 0-3.13 1.806h-5.218v10.434c0 3.884 3.085 6.131 5.504 7.296A2.087 2.087 0 0 0 24 36.24a2.087 2.087 0 0 0 2.843-2.858c2.42-1.165 5.505-3.412 5.505-7.296V15.652H27.13Zm2.087 10.435c0 .544 0 2.198-2.575 3.836A12.641 12.641 0 0 1 24 31.169a12.641 12.641 0 0 1-2.642-1.246c-2.575-1.638-2.575-3.292-2.575-3.836v-7.304h10.434v7.304Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="AD_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAd;
