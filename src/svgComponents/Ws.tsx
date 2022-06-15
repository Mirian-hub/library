import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWs = ({
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
      d="m19.223 15.652.389 1.196h1.257l-1.017.739.388 1.196-1.017-.74-1.017.74.388-1.196-1.017-.739h1.257l.389-1.196ZM12.908 6.26l.647 1.994h2.096l-1.695 1.231.647 1.993-1.695-1.232-1.695 1.232.647-1.993-1.695-1.231h2.095l.648-1.993ZM19.169 8.348l.647 1.993h2.096l-1.696 1.231.648 1.993-1.695-1.231-1.696 1.231.648-1.993-1.695-1.231h2.095l.648-1.993ZM14.22 16.696l.648 1.993h2.096l-1.696 1.231.648 1.993-1.695-1.232-1.696 1.232.648-1.993-1.695-1.231h2.095l.648-1.993ZM8.734 11.478l.648 1.993h2.095l-1.695 1.232.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.695-1.232h2.095l.647-1.993Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgWs;
