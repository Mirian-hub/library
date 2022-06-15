import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFullScreenMedium = ({
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
      d="M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414-1.414L18.586 4H15a1 1 0 0 1-1-1ZM6 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8v9h9v-3a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6Zm-2 4a1 1 0 0 0-2 0v11a1 1 0 0 0 1 1h11a1 1 0 1 0 0-2H4V10Z"
      fill="currentColor"
      fillOpacity={0.2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414-1.414L18.586 4H15ZM6 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8v9h9v-3a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6ZM3 9a1 1 0 0 1 1 1v10h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFullScreenMedium;
