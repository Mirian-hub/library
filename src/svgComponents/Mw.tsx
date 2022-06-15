import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMw = ({
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
    <g clipPath="url(#MW_svg__a)">
      <path
        d="M0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.947 23.947 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.95 23.95 0 0 0 0 24Z"
        fill="#D80027"
      />
      <path
        d="M24 0C13.68 0 4.882 6.513 1.491 15.652h45.015C43.115 6.513 34.318 0 23.999 0Z"
        fill="#000"
      />
      <path
        d="M46.507 32.348H1.492C4.883 41.487 13.68 48 24 48c10.32 0 19.116-6.513 22.508-15.652Z"
        fill="#496E2D"
      />
      <path
        d="M31.174 11.478 28.243 10.1l1.56-2.839-3.182.609-.403-3.216L24 7.02l-2.216-2.365-.404 3.216-3.182-.609 1.56 2.839-2.93 1.378h14.346Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="MW_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMw;
