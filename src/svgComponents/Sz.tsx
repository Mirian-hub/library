import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSz = ({
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
    <g clipPath="url(#SZ_svg__a)">
      <path
        d="M45.619 34.435A23.905 23.905 0 0 0 48 24c0-3.74-.856-7.28-2.381-10.435L24 12.522 2.381 13.565A23.906 23.906 0 0 0 0 24c0 3.74.856 7.28 2.381 10.435L24 35.478l21.619-1.043Z"
        fill="#FFDA44"
      />
      <path
        d="M24.003 0C14.488 0 6.267 5.537 2.385 13.565h43.237C41.74 5.537 33.518 0 24.003 0Z"
        fill="#000"
      />
      <path
        d="M24.003 48c-9.515 0-17.736-5.537-21.618-13.565h43.237C41.74 42.463 33.518 48 24.003 48Z"
        fill="#0052B4"
      />
      <path
        d="M46.867 16.696H1.133A23.983 23.983 0 0 0 0 24c0 2.547.398 5.001 1.133 7.304h45.734A23.981 23.981 0 0 0 48 24c0-2.547-.398-5.001-1.133-7.304Z"
        fill="#A2001D"
      />
      <path
        d="M39.649 22.956H8.344v2.088H39.65v-2.088ZM35.473 18.783H12.517v2.087h22.956v-2.087Z"
        fill="#FFDA44"
      />
      <path
        d="M35.626 24s-5.367 6.26-11.628 6.26c-6.26 0-6.26-6.26-6.26-6.26s0-6.26 6.26-6.26c6.261 0 11.628 6.26 11.628 6.26Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.999 30.26C17.738 30.26 12.37 24 12.37 24S17.738 17.74 24 17.74"
        fill="#000"
      />
      <path d="M21.914 21.913h-2.087v4.174h2.087v-4.174Z" fill="#F0F0F0" />
      <path d="M28.177 21.913H26.09v4.174h2.087v-4.174Z" fill="#000" />
      <path
        d="M8.348 26.087a2.087 2.087 0 1 0 0-4.174 2.087 2.087 0 0 0 0 4.174ZM39.653 26.087a2.087 2.087 0 1 0 0-4.174 2.087 2.087 0 0 0 0 4.174Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="SZ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSz;
