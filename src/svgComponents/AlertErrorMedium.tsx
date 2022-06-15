import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertErrorMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.33 10.853a2 2 0 0 1 0-1.789l3.5-7A2 2 0 0 1 5.617.96h8.764a2 2 0 0 1 1.789 1.105l3.5 7a2 2 0 0 1 0 1.79l-3.5 7a2 2 0 0 1-1.789 1.105H5.618a2 2 0 0 1-1.789-1.106l-3.5-7ZM5.617 2.96l-3.5 7 3.5 7h8.764l3.5-7-3.5-7H5.618Zm.675 3.293a1 1 0 0 1 1.414 0L10 8.545l2.293-2.293a1 1 0 0 1 1.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.373l-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertErrorMedium;
