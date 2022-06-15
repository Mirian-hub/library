import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSyncMedium = ({
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
      d="M22.707 11.67a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.415L18 12.962v-.085A6 6 0 0 0 8.572 7.95a1 1 0 0 1-1.144-1.64A8 8 0 0 1 20 12.877v.085l1.293-1.293a1 1 0 0 1 1.414 0ZM1.293 14.083a1 1 0 0 1 0-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.415L6 12.79v.085a6 6 0 0 0 9.428 4.926 1 1 0 1 1 1.144 1.64A8 8 0 0 1 4 12.876v-.085l-1.293 1.293a1 1 0 0 1-1.414 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSyncMedium;
