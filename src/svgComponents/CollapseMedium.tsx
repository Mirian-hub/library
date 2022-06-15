import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCollapseMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 6.084a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2h-7ZM8.707 18.707a1 1 0 0 1-1.414 0l-5-4.999a.998.998 0 0 1 0-1.415l.004-.004 4.996-4.996a1 1 0 1 1 1.414 1.414L5.414 12H20a1 1 0 0 1 0 2H5.414l3.293 3.293a1 1 0 0 1 0 1.414Zm3.293.377a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCollapseMedium;
