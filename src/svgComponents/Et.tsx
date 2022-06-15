import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEt = ({
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
    <g clipPath="url(#ET_svg__a)">
      <path
        d="M0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087A23.944 23.944 0 0 0 48 24a23.95 23.95 0 0 0-1.453-8.241L24 13.565 1.453 15.76A23.95 23.95 0 0 0 0 24Z"
        fill="#FFDA44"
      />
      <path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#D80027"
      />
      <path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#6DA544"
      />
      <path
        d="M24 35.478c6.34 0 11.478-5.139 11.478-11.478 0-6.34-5.139-11.478-11.478-11.478-6.34 0-11.478 5.139-11.478 11.478 0 6.34 5.139 11.478 11.478 11.478Z"
        fill="#0052B4"
      />
      <path
        d="m23.997 15.112 2.073 6.377h6.715L27.35 25.43l2.088 6.396-5.44-3.96-5.433 3.953 2.08-6.389-5.43-3.941h6.71l2.072-6.377Z"
        fill="#FFDA44"
      />
      <path
        d="m32.262 25.587-6.574-2.136 4.063-5.591-1.689-1.227L24 22.225l-4.062-5.592-1.689 1.227 4.063 5.591-6.574 2.136.645 1.985 6.574-2.136v6.912h2.087v-6.912l6.573 2.136.645-1.985Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="ET_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEt;
