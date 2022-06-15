import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGq = ({
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
    <g clipPath="url(#GQ_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.609 15.652h31.898C43.117 6.513 34.32 0 24 0A23.922 23.922 0 0 0 7.03 7.03l7.579 8.622Z"
        fill="#6DA544"
      />
      <path
        d="M14.609 32.348h31.898C43.117 41.487 34.32 48 24 48a23.922 23.922 0 0 1-16.97-7.03l7.579-8.622Z"
        fill="#D80027"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#0052B4"
      />
      <path
        d="M28.174 19.826v5.217c0 3.195 4.174 4.175 4.174 4.175s4.174-.98 4.174-4.175v-5.217h-8.348Z"
        fill="#DEDDE0"
      />
      <path d="M33.391 24.104h-2.087v3.026h2.087v-3.026Z" fill="#786145" />
      <path
        d="M34.435 22.956a2.087 2.087 0 1 0-4.174 0 1.044 1.044 0 0 0 0 2.087h4.174a1.043 1.043 0 1 0 0-2.087Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="GQ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGq;
