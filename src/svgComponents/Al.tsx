import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAl = ({
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
      fill="#D80027"
    />
    <path
      d="M37.565 17.813h-8.693A3.13 3.13 0 1 0 24 13.922a3.13 3.13 0 1 0-4.872 3.891h-8.693c0 2.306 2.008 4.174 4.313 4.174h-.14a4.174 4.174 0 0 0 4.175 4.174c0 .747.196 1.447.54 2.053l-3.462 3.462 2.656 2.656 3.768-3.768c.148.054.3.098.458.127l-2.277 5.141L24 39.652l3.534-3.82-2.277-5.14c.158-.03.31-.074.458-.128l3.768 3.768 2.656-2.656-3.462-3.462c.344-.606.54-1.306.54-2.053a4.174 4.174 0 0 0 4.174-4.174h-.139c2.305 0 4.313-1.868 4.313-4.174Z"
      fill="#000"
    />
  </svg>
);

export default SvgAl;
