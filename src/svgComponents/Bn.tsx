import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBn = ({
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
    <g clipPath="url(#BN_svg__a)">
      <path
        d="M24 47.997c13.253 0 23.997-10.744 23.997-23.997S37.253.004 24 .004.004 10.747.004 24C.004 37.253 10.747 47.997 24 47.997Z"
        fill="#F0F0F0"
      />
      <path
        d="M3.218 12.002a24.014 24.014 0 0 0-2.414 5.834l40.132 23.17a24.013 24.013 0 0 0 3.845-5.008L3.218 12.002Z"
        fill="#000"
      />
      <path
        d="M35.998 3.218C26.397-2.325 14.558-.477 7.064 6.994l40.132 23.17C49.919 19.939 45.6 8.762 35.998 3.218ZM12.002 44.782c9.601 5.543 21.44 3.696 28.934-3.776L.804 17.836C-1.919 28.061 2.4 39.238 12.002 44.782Z"
        fill="#FFDA44"
      />
      <path
        d="M30.782 21.392a6.782 6.782 0 1 1-12.748-3.226 8.347 8.347 0 1 0 11.933 0c.52.96.815 2.058.815 3.226Z"
        fill="#D80027"
      />
      <path d="M25.566 13.567h-3.13v15.65h3.13v-15.65Z" fill="#D80027" />
      <path
        d="M29.217 16.697H18.783c0 .72.628 1.304 1.348 1.304h-.043c0 .72.584 1.304 1.304 1.304 0 .72.584 1.304 1.304 1.304h2.608c.72 0 1.305-.584 1.305-1.304.72 0 1.304-.584 1.304-1.304h-.044c.72 0 1.348-.584 1.348-1.304ZM31.304 30.26H16.697v3.13h14.607v-3.13Z"
        fill="#D80027"
      />
      <path
        d="M33.39 31.303h-6.26v3.13h6.26v-3.13ZM20.87 31.303h-6.26v3.13h6.26v-3.13Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="BN_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBn;
