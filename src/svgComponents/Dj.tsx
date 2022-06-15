import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDj = ({
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
    <g clipPath="url(#DJ_svg__a)">
      <path
        d="M21.913 26.087S7.043 7.027 7.03 7.029A23.925 23.925 0 0 1 24 0c13.255 0 24 10.745 24 24l-26.087 2.087Z"
        fill="#338AF3"
      />
      <path
        d="M21.913 24S7.043 40.974 7.03 40.97A23.925 23.925 0 0 0 24 48c13.255 0 24-10.745 24-24H21.913Z"
        fill="#6DA544"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#F0F0F0"
      />
      <path
        d="m9.713 17.74 1.554 4.782h5.03l-4.07 2.956 1.555 4.783-4.069-2.956-4.068 2.956 1.554-4.783-4.069-2.956h5.03l1.553-4.783Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="DJ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDj;
