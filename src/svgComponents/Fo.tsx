import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFo = ({
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
      d="m46.957 24 .84-3.13a23.973 23.973 0 0 0-.624-3.13h-25.26V.09a23.94 23.94 0 0 0-3.13.48l-4.174 2.56-2.087-.211a24.028 24.028 0 0 0-3.13 2.039v12.78H.826a23.972 23.972 0 0 0-.623 3.13L1.044 24l-.84 3.13c.14 1.067.348 2.113.623 3.13H9.39v12.781a24.03 24.03 0 0 0 3.13 2.04l3.131-.212 3.13 2.56c1.021.226 2.066.388 3.13.48V30.26h25.261c.274-1.018.484-2.063.623-3.13L46.956 24Z"
      fill="#0052B4"
    />
    <path
      d="M47.797 20.87H18.783V.57a23.838 23.838 0 0 0-6.261 2.348V20.87H.203a24.238 24.238 0 0 0 0 6.261h12.319v17.952a23.838 23.838 0 0 0 6.26 2.347V27.131h29.015a24.224 24.224 0 0 0 0-6.261Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgFo;
