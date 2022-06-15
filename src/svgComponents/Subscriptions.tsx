import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSubscriptions = ({
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
      d="M10 3.959a1 1 0 0 0-2 0V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.019a8.506 8.506 0 0 1-1.267-2H5v-8.541h4.656a8.546 8.546 0 0 1 2.08-2H5V7h3v.959a1 1 0 1 0 2 0V7h4v.959a1 1 0 1 0 2 0V7h3v2.374c.71.218 1.382.527 2 .914V7a2 2 0 0 0-2-2h-3V3.959a1 1 0 1 0-2 0V5h-4V3.959Zm.076 13.883a1 1 0 0 1 .217-1.09l2-2a1 1 0 0 1 1.414 0l2 2A1 1 0 0 1 15 18.459h-.965A3 3 0 1 0 17 15a1 1 0 1 1 0-2 5 5 0 1 1-4.98 5.459H11a1 1 0 0 1-.924-.617Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSubscriptions;
