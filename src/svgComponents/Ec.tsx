import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEc = ({
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
    <g clipPath="url(#EC_svg__a)">
      <path
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24l-24 2.087L0 24Z"
        fill="#FFDA44"
      />
      <path
        d="M3.212 36C7.362 43.173 15.117 48 24 48c8.883 0 16.639-4.827 20.789-12L24 34.435 3.212 36Z"
        fill="#D80027"
      />
      <path
        d="M44.788 36A23.889 23.889 0 0 0 48 24H0c0 4.372 1.17 8.47 3.212 12h41.576Z"
        fill="#0052B4"
      />
      <path
        d="M24 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z"
        fill="#FFDA44"
      />
      <path
        d="M24 29.217A5.223 5.223 0 0 1 18.782 24v-3.13A5.223 5.223 0 0 1 24 15.652a5.223 5.223 0 0 1 5.217 5.218V24A5.223 5.223 0 0 1 24 29.217Z"
        fill="#338AF3"
      />
      <path
        d="M32.348 11.478h-6.261a2.087 2.087 0 0 0-4.174 0h-6.261c0 1.153 1.004 2.087 2.156 2.087h-.07c0 1.153.935 2.087 2.088 2.087 0 1.153.934 2.087 2.087 2.087h4.174a2.087 2.087 0 0 0 2.087-2.087 2.087 2.087 0 0 0 2.087-2.087h-.07c1.153 0 2.157-.934 2.157-2.087Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="EC_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEc;
