import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRs = ({
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
      d="M24 0C10.745 0 0 10.745 0 24c0 2.936.528 5.748 1.493 8.348h45.014A23.948 23.948 0 0 0 48 24C48 10.745 37.255 0 24 0Z"
      fill="#0052B4"
    />
    <path
      d="M24.001 0C13.681 0 4.885 6.513 1.494 15.652h45.014C43.118 6.513 34.32 0 24.001 0Z"
      fill="#D80027"
    />
    <path
      d="M6.208 13.565v11.973c0 6.81 8.897 8.897 8.897 8.897s8.897-2.087 8.897-8.897V13.565H6.21Z"
      fill="#D80027"
    />
    <path
      d="M9.88 15.652h10.434v-4.174l-2.087 1.044-3.13-3.13-3.13 3.13-2.088-1.044v4.174ZM21.91 27.205l-6.783-6.783-6.783 6.783 2.214 2.213 4.569-4.569 4.569 4.57 2.213-2.214Z"
      fill="#FFDA44"
    />
    <path
      d="M21.91 20.87h-3.165a2.087 2.087 0 1 0-3.645-2.028 2.086 2.086 0 1 0-3.646 2.028h-3.11c0 1.152 1.004 2.087 2.157 2.087h-.07c0 1.152.935 2.087 2.087 2.087 0 1.02.733 1.868 1.701 2.05l-1.644 3.712c.788.32 1.649.498 2.552.498s1.764-.177 2.552-.498l-1.644-3.713a2.087 2.087 0 0 0 1.7-2.05 2.087 2.087 0 0 0 2.088-2.086h-.07c1.153 0 2.157-.935 2.157-2.087Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgRs;
