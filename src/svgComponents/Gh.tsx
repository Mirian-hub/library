import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGh = ({
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
    <g clipPath="url(#GH_svg__a)">
      <path
        d="M0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.947 23.947 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.95 23.95 0 0 0 0 24Z"
        fill="#FFDA44"
      />
      <path
        d="M24 0C13.68 0 4.882 6.513 1.491 15.652h45.014C43.117 6.513 34.319 0 24 0Z"
        fill="#D80027"
      />
      <path
        d="M46.506 32.348H1.492C4.883 41.487 13.68 48 23.999 48c10.32 0 19.116-6.513 22.507-15.652Z"
        fill="#496E2D"
      />
      <path
        d="m24 15.652 2.073 6.377h6.705l-5.424 3.942 2.072 6.377L24 28.407l-5.425 3.94 2.072-6.376-5.425-3.942h6.706L24 15.652Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="GH_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGh;
