import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMarkAsPaidMedium = ({
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
      d="M4 4.959a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a1 1 0 1 0-2 0v8H4v-7h5a1.5 1.5 0 0 0 0-3H4v-2h4a1 1 0 1 0 0-2H4Zm2 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm10-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2h-1Z"
      fill="#312B78"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.707 3.252a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L15 8.545l5.293-5.293a1 1 0 0 1 1.414 0Z"
      fill="#50E2D1"
    />
  </svg>
);

export default SvgMarkAsPaidMedium;
