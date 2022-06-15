import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNo = ({
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
      d="M.827 30.261a24.02 24.02 0 0 0 8.565 12.78v-12.78H.827ZM21.914 47.909c.688.059 1.383.091 2.086.091 11.09 0 20.42-7.52 23.174-17.739h-25.26v17.648ZM47.174 17.74C44.42 7.52 35.089 0 24 0c-.703 0-1.398.032-2.086.091V17.74h25.26ZM9.392 4.959a24.02 24.02 0 0 0-8.565 12.78h8.565V4.959Z"
      fill="#D80027"
    />
    <path
      d="M47.797 20.87H18.783V.57a23.838 23.838 0 0 0-6.261 2.348V20.87H.203a24.205 24.205 0 0 0 0 6.261h12.319v17.952a23.838 23.838 0 0 0 6.26 2.347V27.131h29.015a24.224 24.224 0 0 0 0-6.261Z"
      fill="#0052B4"
    />
  </svg>
);

export default SvgNo;
