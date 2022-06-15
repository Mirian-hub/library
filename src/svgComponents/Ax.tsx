import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAx = ({
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
      d="M47.173 30.26c.538-1.995.827-4.094.827-6.26 0-2.166-.289-4.265-.827-6.26L21.913.09A23.878 23.878 0 0 0 9.391 4.96L.827 17.739A24.026 24.026 0 0 0 0 24c0 2.154.285 4.24.817 6.226l8.574 12.815a23.878 23.878 0 0 0 12.522 4.868l25.26-17.648Z"
      fill="#FFDA44"
    />
    <path
      d="M.827 30.26A24.02 24.02 0 0 0 9.39 43.042v-12.78H.827ZM21.913 47.909c.688.059 1.384.091 2.087.091 11.089 0 20.42-7.52 23.173-17.74h-25.26V47.91ZM47.173 17.74C44.42 7.52 35.09 0 24 0c-.703 0-1.399.032-2.087.091V17.74h25.26ZM9.391 4.959a24.02 24.02 0 0 0-8.564 12.78H9.39V4.959Z"
      fill="#0052B4"
    />
    <path
      d="M47.797 20.87H18.783V.57a23.838 23.838 0 0 0-6.261 2.348V20.87H.203a24.205 24.205 0 0 0 0 6.261h12.319v17.952a23.838 23.838 0 0 0 6.26 2.347V27.131h29.015a24.224 24.224 0 0 0 0-6.261Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgAx;
