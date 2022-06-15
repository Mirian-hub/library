import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNa = ({
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
      d="M7.029 40.97a24.14 24.14 0 0 0 3.208 2.696l33.428-33.429a24.143 24.143 0 0 0-5.903-5.903L4.334 37.764c.79 1.127 1.688 2.2 2.695 3.208Z"
      fill="#A2001D"
    />
    <path
      d="M7.031 7.03C-.541 14.6-1.994 25.971 2.667 35.003L35.006 2.666C25.974-1.996 14.602-.542 7.03 7.029Z"
      fill="#0052B4"
    />
    <path
      d="M40.971 40.97c7.572-7.57 9.025-18.942 4.364-27.974L12.997 45.334c9.032 4.662 20.403 3.208 27.974-4.363Z"
      fill="#496E2D"
    />
    <path
      d="m19.828 13.565-2.69 1.265 1.432 2.605-2.92-.559-.37 2.95-2.034-2.17-2.034 2.17-.37-2.95-2.92.559 1.432-2.605-2.69-1.265 2.69-1.265-1.432-2.604 2.92.558.37-2.95 2.034 2.17 2.034-2.17.37 2.95 2.92-.558L17.14 12.3l2.689 1.265Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgNa;
