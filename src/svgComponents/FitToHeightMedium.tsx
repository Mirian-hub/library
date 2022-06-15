import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFitToHeightMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm3.247 5.659a1 1 0 0 1 .095-1.412l3.989-3.49A.993.993 0 0 1 12 5.5a.998.998 0 0 1 .67.257l3.989 3.49a1 1 0 1 1-1.317 1.506L12 7.829l-3.341 2.924a1 1 0 0 1-1.412-.095Zm.095 4.094a1 1 0 0 1 1.317-1.506L12 16.171l3.341-2.924a1 1 0 0 1 1.318 1.506l-3.99 3.49a.99.99 0 0 1-.672.257.997.997 0 0 1-.666-.257l-3.99-3.49Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFitToHeightMedium;
