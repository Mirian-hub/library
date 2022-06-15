import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIq = ({
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
    <g clipPath="url(#IQ_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#A2001D"
      />
      <path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#000"
      />
      <path
        d="M18.26 22.435h-4.626a2.089 2.089 0 0 1 2.018-1.566v-3.13a5.223 5.223 0 0 0-5.217 5.217v2.609h7.826c.288 0 .522.234.522.522v1.043H8.348v3.13h13.565v-4.173a3.656 3.656 0 0 0-3.652-3.652ZM26.088 27.13V17.74h-3.13v12.522h5.217v-3.13h-2.087ZM36.521 27.13V17.74h-3.13v9.391h-1.044V24h-3.13v6.26h9.391v-3.13h-2.087Z"
        fill="#496E2D"
      />
    </g>
    <defs>
      <clipPath id="IQ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIq;
