import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDe = ({
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
    <g clipPath="url(#DE_svg__a)">
      <path
        d="M1.493 32.348C4.883 41.487 13.68 48 24 48c10.32 0 19.116-6.513 22.507-15.652L24 30.26 1.493 32.348Z"
        fill="#FFDA44"
      />
      <path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652L24 17.74l22.507-2.087C43.117 6.513 34.32 0 24 0Z"
        fill="#000"
      />
      <path
        d="M1.493 15.652A23.949 23.949 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348h45.014A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348H1.493Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="DE_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDe;
