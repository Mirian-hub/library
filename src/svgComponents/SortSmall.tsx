import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSortSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.707.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L5 2.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-4-4Zm-4 10a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L5 13.586l-3.293-3.293Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSortSmall;
