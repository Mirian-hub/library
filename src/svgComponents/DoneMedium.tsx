import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDoneMedium = ({
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
      d="M14.757 7H7v10h10v-3.757l2-2V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9.757l-2 2Z"
      fill="#312B78"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.707 6.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L12 12.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
      fill="#50E2D1"
    />
  </svg>
);

export default SvgDoneMedium;
