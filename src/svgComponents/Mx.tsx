import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMx = ({
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
      d="M48 24c0-9.515-5.538-17.737-13.566-21.619v43.237C42.462 41.737 48 33.515 48 24Z"
      fill="#D80027"
    />
    <path
      d="M0 24c0 9.515 5.537 17.737 13.565 21.619V2.38C5.537 6.263 0 14.485 0 24ZM17.74 24a6.26 6.26 0 1 0 12.521 0v-2.087H17.74V24Z"
      fill="#6DA544"
    />
    <path
      d="M32.348 19.826h-6.261a2.087 2.087 0 0 0-4.174 0h-6.261c0 1.153 1.004 2.087 2.156 2.087h-.07c0 1.153.935 2.087 2.088 2.087 0 1.153.934 2.087 2.087 2.087h4.174A2.087 2.087 0 0 0 28.174 24a2.087 2.087 0 0 0 2.087-2.087h-.07c1.153 0 2.157-.934 2.157-2.087Z"
      fill="#FF9811"
    />
  </svg>
);

export default SvgMx;
