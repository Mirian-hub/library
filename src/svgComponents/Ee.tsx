import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEe = ({
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
    <g clipPath="url(#EE_svg__a)">
      <path
        d="M0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.947 23.947 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.95 23.95 0 0 0 0 24Z"
        fill="#000"
      />
      <path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#0052B4"
      />
      <path
        d="M46.507 32.348H1.493C4.883 41.487 13.68 48 24 48c10.32 0 19.116-6.513 22.507-15.652Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="EE_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEe;
