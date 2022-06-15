import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKe = ({
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
    <g clipPath="url(#KE_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C14.485 0 6.263 5.537 2.38 13.565h43.237C41.736 5.537 33.515 0 24 0Z"
        fill="#000"
      />
      <path
        d="M24 48C14.485 48 6.263 42.463 2.38 34.435h43.237C41.736 42.463 33.515 48 24 48Z"
        fill="#496E2D"
      />
      <path
        d="M46.867 16.696H1.133A23.983 23.983 0 0 0 0 24c0 2.547.398 5.001 1.133 7.304h45.734A23.981 23.981 0 0 0 48 24c0-2.547-.398-5.001-1.133-7.304Z"
        fill="#A2001D"
      />
      <path
        d="M31.473 11.09 28.631 9.78 24 20.265 19.369 9.779l-2.842 1.312L22.277 24l-5.75 12.91 2.842 1.311 4.63-10.486 4.632 10.486 2.842-1.312L25.723 24l5.75-12.91Z"
        fill="#F0F0F0"
      />
      <path
        d="M25.93 12.327c-1.1-1.201-1.93-1.892-1.93-1.892s-.83.69-1.93 1.892v23.346c1.1 1.201 1.93 1.892 1.93 1.892s.83-.69 1.93-1.892V12.327Z"
        fill="#F0F0F0"
      />
      <path
        d="M18.783 16.804v14.392c1.163 2.06 2.586 3.749 3.652 4.868V11.936c-1.066 1.12-2.49 2.808-3.652 4.868ZM29.218 16.804c-1.163-2.06-2.586-3.749-3.652-4.868v24.128c1.066-1.12 2.49-2.808 3.652-4.868V16.804Z"
        fill="#A2001D"
      />
      <path
        d="M29.217 16.804v14.392c1.177-2.086 2.087-4.553 2.087-7.196s-.91-5.11-2.087-7.196ZM18.783 16.804v14.392c-1.177-2.086-2.087-4.553-2.087-7.196s.91-5.11 2.087-7.196Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="KE_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgKe;
