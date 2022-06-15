import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBe = ({
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
    <g clipPath="url(#BE_svg__a)">
      <path
        d="M32.348 1.493A23.948 23.948 0 0 0 24 0c-2.936 0-5.748.528-8.348 1.493L13.565 24l2.087 22.507C18.252 47.472 21.064 48 24 48c2.936 0 5.748-.528 8.348-1.493L34.435 24 32.348 1.493Z"
        fill="#FFDA44"
      />
      <path
        d="M48 24c0-10.32-6.513-19.116-15.652-22.507v45.014C41.487 43.117 48 34.32 48 24Z"
        fill="#D80027"
      />
      <path
        d="M0 24c0 10.32 6.513 19.116 15.652 22.507V1.493C6.513 4.883 0 13.68 0 24Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="BE_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBe;
