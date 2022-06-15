import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgScanMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6h4v4h-4a2 2 0 0 0-2 2v4H6v-4a6 6 0 0 1 6-6Zm20 0v4h4a2 2 0 0 1 2 2v4h4v-4a6 6 0 0 0-6-6h-4Zm6 30a2 2 0 0 1-2 2h-4v4h4a6 6 0 0 0 6-6v-4h-4v4Zm-28 0v-4H6v4a6 6 0 0 0 6 6h4v-4h-4a2 2 0 0 1-2-2Zm6-21.083a2 2 0 0 0 0 4h16a2 2 0 1 0 0-4H16ZM6 22a2 2 0 1 0 0 4h36a2 2 0 1 0 0-4H6Zm10 6.917a2 2 0 0 0 0 4h16a2 2 0 1 0 0-4H16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgScanMedium;
