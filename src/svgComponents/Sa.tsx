import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSa = ({
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
      fill="#6DA544"
    />
    <path
      d="M13.566 28.696a3.13 3.13 0 0 0 3.13 3.13h9.392a2.609 2.609 0 0 0 2.608 2.609h3.13a2.609 2.609 0 0 0 2.61-2.609v-3.13h-20.87ZM34.696 13.566v7.304a2.09 2.09 0 0 1-2.087 2.087v3.13a5.223 5.223 0 0 0 5.217-5.217v-7.304h-3.13ZM12.261 20.87a2.09 2.09 0 0 1-2.087 2.087v3.13a5.223 5.223 0 0 0 5.218-5.217v-7.304h-3.13v7.304Z"
      fill="#F0F0F0"
    />
    <path
      d="M33.13 13.566H30v7.304h3.13v-7.304ZM25.305 17.74a.522.522 0 0 1-1.043 0v-4.175h-3.13v4.174a.522.522 0 0 1-1.044 0v-4.174h-3.13v4.174a3.656 3.656 0 0 0 3.652 3.652 3.63 3.63 0 0 0 2.087-.657 3.63 3.63 0 0 0 2.547.627 2.089 2.089 0 0 1-2.026 1.595v3.13a5.223 5.223 0 0 0 5.218-5.216v-7.305h-3.13v4.174Z"
      fill="#F0F0F0"
    />
    <path d="M21.653 22.956h-4.696v3.13h4.696v-3.13Z" fill="#F0F0F0" />
  </svg>
);

export default SvgSa;
