import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTj = ({
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
    <g clipPath="url(#TJ_svg__a)">
      <path
        d="M2.381 13.565A23.905 23.905 0 0 0 0 24c0 3.74.856 7.28 2.381 10.435L24 36.522l21.619-2.087A23.907 23.907 0 0 0 48 24c0-3.74-.856-7.28-2.381-10.435L24 11.478 2.381 13.565Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.383 34.435C6.265 42.463 14.486 48 24.001 48c9.515 0 17.736-5.537 21.617-13.565H2.383Z"
        fill="#6DA544"
      />
      <path
        d="M2.383 13.565h43.235C41.737 5.537 33.516 0 24.001 0S6.265 5.537 2.383 13.565Z"
        fill="#D80027"
      />
      <path
        d="M19.826 30.26h8.348v-3.547l-1.67.835L24 25.044l-2.505 2.504-1.67-.835v3.548ZM15.05 26.087l.389 1.196h1.257l-1.017.739.388 1.195-1.017-.739-1.017.74.389-1.196-1.018-.74h1.258l.388-1.195ZM16.254 21.913l.389 1.196H17.9l-1.017.739.389 1.195-1.018-.738-1.017.738.389-1.195-1.017-.74h1.257l.388-1.195ZM19.7 18.783l.388 1.195h1.257l-1.017.74.389 1.195-1.018-.739-1.017.739.389-1.196-1.017-.739h1.257l.388-1.195ZM32.951 26.087l-.389 1.196h-1.257l1.017.739-.388 1.195 1.017-.739 1.017.74-.388-1.196 1.017-.74H33.34l-.389-1.195ZM31.745 21.913l-.388 1.196h-1.258l1.018.739-.389 1.195 1.017-.738 1.017.738-.388-1.195 1.017-.74h-1.257l-.389-1.195ZM28.303 18.783l-.389 1.195h-1.257l1.017.74-.388 1.195 1.017-.739 1.017.739-.389-1.196 1.017-.739h-1.257l-.388-1.195ZM24 17.217l.388 1.196h1.258l-1.018.739.389 1.196-1.017-.74-1.017.74.388-1.196-1.017-.739h1.257L24 17.217Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="TJ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTj;
