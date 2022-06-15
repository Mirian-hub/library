import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEr = ({
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
    <g clipPath="url(#ER_svg__a)">
      <path
        d="M21.913 21.913S7.043 40.974 7.029 40.971A23.925 23.925 0 0 0 23.999 48c13.255 0 24-10.745 24-24l-26.086-2.087Z"
        fill="#338AF3"
      />
      <path
        d="M21.913 24S7.043 7.026 7.029 7.03A23.925 23.925 0 0 1 23.999 0c13.255 0 24 10.745 24 24H21.913Z"
        fill="#6DA544"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94 0 .005 40.97-16.97 40.97-16.97L7.03 7.03Z"
        fill="#D80027"
      />
      <path
        d="M12.521 14.087c-4.603 0-8.347 3.745-8.347 8.348v3.13c0 4.603 3.744 8.348 8.347 8.348s8.348-3.745 8.348-8.348v-3.13c0-4.603-3.745-8.348-8.348-8.348Zm5.218 11.478a5.227 5.227 0 0 1-3.653 4.977V27.13l2.215-2.214-2.213-2.214-.002-.788V20.87h-3.13V24l-2.213 2.213 2.213 2.213v2.117a5.226 5.226 0 0 1-3.652-4.978v-3.13a5.223 5.223 0 0 1 5.217-5.217 5.223 5.223 0 0 1 5.218 5.217v3.13Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="ER_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEr;
