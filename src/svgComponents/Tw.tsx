import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTw = ({
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
      d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24L24 0c13.255 0 24 10.745 24 24Z"
      fill="#D80027"
    />
    <path d="M24 24V0C10.745 0 0 10.745 0 24h24Z" fill="#0052B4" />
    <path
      d="m20.87 14.046-2.93 1.379 1.56 2.838-3.183-.609-.403 3.215-2.217-2.364-2.217 2.364-.403-3.215-3.183.609 1.56-2.839-2.93-1.378 2.93-1.379-1.56-2.839 3.183.61.403-3.216 2.217 2.365 2.217-2.365.403 3.215 3.183-.609-1.56 2.84 2.93 1.378Z"
      fill="#F0F0F0"
    />
    <path
      d="M13.696 18.513a4.467 4.467 0 1 0 0-8.935 4.467 4.467 0 0 0 0 8.935Z"
      fill="#0052B4"
    />
    <path
      d="M13.696 16.426a2.383 2.383 0 0 1-2.38-2.38 2.383 2.383 0 0 1 2.38-2.38 2.383 2.383 0 0 1 2.38 2.38 2.383 2.383 0 0 1-2.38 2.38Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgTw;
