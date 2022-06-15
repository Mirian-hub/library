import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExpandMedium = ({
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
      d="M4 6.084a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2H4Zm17.707 7.623-.005.005-4.995 4.995a1 1 0 0 1-1.414-1.414L18.586 14H4a1 1 0 1 1 0-2h14.586l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414ZM3 19.084a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExpandMedium;
