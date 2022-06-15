import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAs = ({
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
    <path
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#F0F0F0"
    />
    <path
      d="M35.643 3.01A23.89 23.89 0 0 0 24 0C10.746 0 .002 10.744 0 23.997l16.696-8.345L35.643 3.011ZM0 24.003C.002 37.256 10.746 48 24 48c4.225 0 8.195-1.093 11.643-3.01L16.696 32.347 0 24.003Z"
      fill="#0052B4"
    />
    <path
      d="M37.643 4.255a24.029 24.029 0 0 0-2-1.244L0 23.997v.006l35.643 20.986a24.058 24.058 0 0 0 2-1.244L4.109 24 37.643 4.255Z"
      fill="#D80027"
    />
    <path
      d="M41.739 23.105H38.88a2.27 2.27 0 0 0-.14-3.058 2.271 2.271 0 0 0 0-3.212l-.053.054c.887-.887.94-2.38.053-3.266L25.891 26.472c.887.887 2.3.876 3.187-.01l.248-.227 6.152-.559v2.646h2.087v-2.836l3.13-.284 1.044-2.097Z"
      fill="#A2001D"
    />
    <path
      d="M26.088 29.217 24 28.174l2.088-1.044h13.565v2.087H26.088Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgAs;
