import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKm = ({
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
    <g clipPath="url(#KM_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M48 23.93H21.982c-5.166 5.166-8.29 9.154-11.479 12.343l13.566 1.223 21.05-2.087A23.892 23.892 0 0 0 48 23.999v-.069Z"
        fill="#D80027"
      />
      <path
        d="M10.505 12.452h34.538C40.962 5.03 33.07 0 24 0A23.92 23.92 0 0 0 7.066 6.996l3.439 5.456Z"
        fill="#FFDA44"
      />
      <path
        d="M11.548 35.409c-2.158 2.157-2.992 3.965-4.553 5.526A23.923 23.923 0 0 0 24 48c9.125 0 17.06-5.093 21.12-12.591H11.548Z"
        fill="#0052B4"
      />
      <path
        d="M7.029 6.96c-9.373 9.372-9.373 24.569 0 33.941l16.97-16.97L7.03 6.96Z"
        fill="#6DA544"
      />
      <path
        d="M6.33 23.93a7.306 7.306 0 0 1 5.74-7.134 7.304 7.304 0 1 0 0 14.269 7.306 7.306 0 0 1-5.74-7.134Z"
        fill="#F0F0F0"
      />
      <path
        d="m11.99 17.67.388 1.195h1.257l-1.017.74.389 1.195-1.018-.739-1.017.74.389-1.197-1.017-.739H11.6l.388-1.195Z"
        fill="#F0F0F0"
      />
      <path
        d="m11.99 20.8.388 1.196h1.257l-1.017.739.389 1.195-1.018-.738-1.017.738.389-1.195-1.017-.74H11.6l.388-1.195Z"
        fill="#F0F0F0"
      />
      <path
        d="m11.99 23.93.388 1.196h1.257l-1.017.74.389 1.195-1.018-.739-1.017.739.389-1.196-1.017-.739H11.6l.388-1.195ZM11.99 27.061l.388 1.196h1.257l-1.017.739.389 1.195-1.018-.738-1.017.738.389-1.195-1.017-.74H11.6l.388-1.195Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="KM_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgKm;
