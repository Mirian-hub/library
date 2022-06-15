import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDiscount = ({
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
      d="M9 8.459a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-.5 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM15 14.459a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-.5 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
      fill="currentColor"
    />
    <path
      d="M7.293 18.707a1 1 0 0 1 0-1.414l8-8a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9.724V21a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.724a2 2 0 0 0-.464-1.28L16.6 3.72A2 2 0 0 0 15.063 3H8.937a2 2 0 0 0-1.537.72L3.464 8.444A2 2 0 0 0 3 9.724ZM5 21V9.724L8.937 5h6.126L19 9.724V21H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDiscount;
