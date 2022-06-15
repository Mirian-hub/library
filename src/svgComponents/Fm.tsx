import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFm = ({
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
      fill="#338AF3"
    />
    <path
      d="m23.999 10.435 1.036 3.188h3.352l-2.712 1.971 1.036 3.189-2.712-1.971-2.713 1.97 1.036-3.188-2.712-1.97h3.353l1.036-3.19ZM10.434 24l3.189-1.036v-3.353l1.97 2.713 3.189-1.036L16.812 24l1.97 2.712-3.188-1.036-1.971 2.713v-3.353L10.434 24ZM23.999 37.565l-1.036-3.188H19.61l2.712-1.971-1.036-3.189L24 31.188l2.712-1.97-1.036 3.188 2.712 1.97h-3.352l-1.036 3.19ZM37.565 24l-3.189 1.036v3.353l-1.97-2.713-3.189 1.036L31.187 24l-1.97-2.712 3.189 1.036 1.97-2.713v3.353L37.565 24Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgFm;
