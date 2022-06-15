import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChevronRightMedium = ({
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
      d="M9.707 5.707a1 1 0 0 0-1.414 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l5.657-5.657a1 1 0 0 0 0-1.414L9.707 5.707Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronRightMedium;
