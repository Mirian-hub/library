import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgJe = ({
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
      d="M43.04 38.613 28.427 24 43.04 9.387a24.257 24.257 0 0 0-4.427-4.427L24 19.573 9.386 4.96A24.231 24.231 0 0 0 4.96 9.387L19.573 24 4.959 38.613a24.246 24.246 0 0 0 4.427 4.428L24 28.427 38.613 43.04a24.258 24.258 0 0 0 4.427-4.427Z"
      fill="#D80027"
    />
    <path
      d="M19.826 7.304 24 8.348l4.173-1.044V3.757l-1.67.834L24 2.087l-2.505 2.504-1.67-.834v3.547Z"
      fill="#FFDA44"
    />
    <path
      d="M19.826 7.304v2.61c0 3.194 4.174 4.173 4.174 4.173s4.173-.979 4.173-4.174V7.304h-8.347Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgJe;
