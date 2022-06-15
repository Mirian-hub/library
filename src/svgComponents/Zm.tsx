import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgZm = ({
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
      fill="#496E2D"
    />
    <path
      d="M33.391 24H24v24a23.96 23.96 0 0 0 8-1.367L33.391 24Z"
      fill="#D80027"
    />
    <path
      d="M40 41.887c4.91-4.395 8-10.78 8-17.887h-9.392L40 41.887Z"
      fill="#FF9811"
    />
    <path d="M32 24v22.633a23.987 23.987 0 0 0 8-4.746V24h-8Z" fill="#000" />
    <path
      d="M44.348 15.652h-6.261a2.087 2.087 0 0 0-4.174 0h-6.261c0 1.153 1.004 2.087 2.156 2.087h-.07c0 1.153.935 2.087 2.088 2.087 0 1.153.934 2.087 2.087 2.087h4.174a2.087 2.087 0 0 0 2.087-2.087 2.087 2.087 0 0 0 2.087-2.087h-.07c1.153 0 2.157-.934 2.157-2.087Z"
      fill="#FF9811"
    />
  </svg>
);

export default SvgZm;
