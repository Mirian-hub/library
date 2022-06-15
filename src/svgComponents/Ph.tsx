import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPh = ({
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
      fill="#F0F0F0"
    />
    <path
      d="M24 0v24L7.029 40.97A23.925 23.925 0 0 0 23.999 48c13.255 0 24-10.745 24-24S24 0 24 0Z"
      fill="#D80027"
    />
    <path
      d="M24 0A23.925 23.925 0 0 0 7.029 7.03L23.999 24h24C48 10.745 37.255 0 24 0Z"
      fill="#0052B4"
    />
    <path
      d="m16.433 24-2.931-1.379 1.56-2.838-3.182.609-.403-3.216-2.217 2.365-2.217-2.365-.404 3.216-3.182-.61 1.56 2.84L2.087 24l2.93 1.379-1.56 2.838 3.183-.608.403 3.215 2.217-2.365 2.217 2.365.403-3.215 3.182.608-1.56-2.838L16.432 24ZM6.4 9.391l.975 1.364 1.598-.506-.995 1.348.975 1.364-1.59-.53-.996 1.349.013-1.676-1.59-.53 1.598-.506L6.4 9.39ZM6.4 34.22l.975 1.364 1.598-.507-.995 1.35.975 1.363-1.59-.53-.996 1.349.013-1.677-1.59-.53 1.598-.505.012-1.677ZM20.313 21.806l-.976 1.363-1.598-.506.996 1.349-.976 1.363 1.59-.53.996 1.35-.012-1.677 1.59-.53-1.598-.506-.012-1.676Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgPh;
