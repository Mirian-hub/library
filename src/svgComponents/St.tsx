import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSt = ({
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
    <g clipPath="url(#ST_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <path
        d="M14.61 15.652h31.898C43.117 6.513 34.32 0 24 0A23.922 23.922 0 0 0 7.03 7.03l7.578 8.622ZM14.61 32.348h31.898C43.117 41.487 34.32 48 24 48a23.922 23.922 0 0 1-16.97-7.03l7.578-8.622Z"
        fill="#6DA544"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#D80027"
      />
      <path
        d="m30.475 19.826 1.036 3.189h3.353l-2.713 1.97 1.036 3.189-2.712-1.97-2.712 1.97 1.036-3.189-2.713-1.97h3.353l1.036-3.189ZM40.91 19.826l1.035 3.189h3.353l-2.712 1.97 1.035 3.189-2.712-1.97-2.712 1.97 1.036-3.189-2.713-1.97h3.353l1.036-3.189Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="ST_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSt;
