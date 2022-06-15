import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHu = ({
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
    <g clipPath="url(#HU_svg__a)">
      <path
        d="M1.493 15.652A23.95 23.95 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 13.565 1.493 15.652Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652h45.015C43.116 6.513 34.319 0 24 0Z"
        fill="#D80027"
      />
      <path
        d="M24 48c10.32 0 19.116-6.513 22.508-15.652H1.492C4.884 41.487 13.681 48 24 48Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="HU_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHu;
