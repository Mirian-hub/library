import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMf = ({
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
    <g clipPath="url(#MF_svg__a)">
      <path
        d="M21.913 26.087S7.043 7.027 7.029 7.029A23.925 23.925 0 0 1 23.999 0c13.255 0 24 10.745 24 24l-26.086 2.087Z"
        fill="#D80027"
      />
      <path
        d="M21.913 24S7.043 40.974 7.029 40.97A23.925 23.925 0 0 0 23.999 48c13.255 0 24-10.745 24-24H21.914Z"
        fill="#0052B4"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.632 24a6.783 6.783 0 1 0 13.521 0H2.634ZM9.394 20.87a2.087 2.087 0 1 0 0-4.174 2.087 2.087 0 0 0 0 4.174Z"
        fill="#FFDA44"
      />
      <path
        d="M4.697 18.26v6.784c0 3.594 4.695 4.695 4.695 4.695s4.696-1.101 4.696-4.695V18.26H4.697Z"
        fill="#D80027"
      />
      <path
        d="M9.393 27.555c-.871-.314-2.611-1.115-2.611-2.512v-4.695h5.217v4.695c0 1.402-1.74 2.201-2.606 2.512Z"
        fill="#338AF3"
      />
      <path
        d="M10.436 22.957v-1.044l-1.043-.522-1.044.522v1.044l-.522.521v2.087h3.13v-2.087l-.52-.521Z"
        fill="#F3F3F3"
      />
    </g>
    <defs>
      <clipPath id="MF_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMf;
