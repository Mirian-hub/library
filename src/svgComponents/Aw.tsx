import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAw = ({
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
      fill="#FFDA44"
    />
    <path
      d="M24 48c7.274 0 13.792-3.237 18.193-8.348H5.807C10.208 44.763 16.726 48 24 48ZM48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 2.166.289 4.265.827 6.26h46.346c.538-1.995.827-4.094.827-6.26ZM1.908 33.391a23.914 23.914 0 0 0 1.615 3.13h40.954a23.951 23.951 0 0 0 1.616-3.13H1.907Z"
      fill="#338AF3"
    />
    <path
      d="m10.998 15.137-4.689-2.07L11 10.999l2.069-4.689 2.07 4.69 4.688 2.069-4.689 2.07-2.07 4.688-2.069-4.689Z"
      fill="#F0F0F0"
    />
    <path
      d="m13.068 8.894 1.278 2.896 2.896 1.278-2.896 1.278-1.278 2.896-1.278-2.896-2.896-1.278 2.896-1.278 1.278-2.896Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgAw;
