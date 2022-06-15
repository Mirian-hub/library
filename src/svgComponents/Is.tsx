import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIs = ({
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
      d="M.826 30.26a24.02 24.02 0 0 0 8.565 12.781v-12.78H.826ZM21.913 47.909C22.6 47.968 23.296 48 24 48c11.088 0 20.419-7.52 23.173-17.74h-25.26V47.91ZM47.173 17.74C44.419 7.52 35.088 0 24 0c-.704 0-1.4.032-2.087.091V17.74h25.26ZM9.39 4.959a24.02 24.02 0 0 0-8.564 12.78h8.565V4.96Z"
      fill="#0052B4"
    />
    <path
      d="M47.797 20.87H18.783V.57a23.838 23.838 0 0 0-6.261 2.348V20.87H.203a24.206 24.206 0 0 0 0 6.261h12.319v17.952a23.834 23.834 0 0 0 6.26 2.347V27.131h29.015a24.224 24.224 0 0 0 0-6.261Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgIs;
