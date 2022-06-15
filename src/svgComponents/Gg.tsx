import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGg = ({
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
      d="M47.797 20.87H27.13V.203a24.24 24.24 0 0 0-6.261 0V20.87H.203a24.237 24.237 0 0 0 0 6.26H20.87v20.667a24.223 24.223 0 0 0 6.261 0V27.13h20.667a24.223 24.223 0 0 0 0-6.261Z"
      fill="#D80027"
    />
    <path
      d="m30.783 25.043 1.565 1.044v-4.174l-1.565 1.043h-5.74v-5.739l1.044-1.565h-4.174l1.043 1.565v5.74h-5.739l-1.565-1.044v4.174l1.565-1.044h5.74v5.74l-1.044 1.565h4.174l-1.044-1.565v-5.74h5.74Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgGg;
