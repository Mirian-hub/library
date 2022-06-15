import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertHelpMedium = ({
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
      d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.4 4.758a3.949 3.949 0 1 1 1.4 7.64 1 1 0 0 1 .002-2 1.95 1.95 0 1 0-1.482-3.215A1 1 0 0 1 9 7.885a3.95 3.95 0 0 1 1.6-1.127ZM12 15.5a1 1 0 0 1 1 1v.02a1 1 0 0 1-2 0v-.02a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertHelpMedium;
