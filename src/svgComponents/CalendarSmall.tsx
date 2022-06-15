import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCalendarSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 1a.75.75 0 0 0-1.5 0v.75H4.5A2.75 2.75 0 0 0 1.75 4.5v7a2.75 2.75 0 0 0 2.75 2.75h7a2.75 2.75 0 0 0 2.75-2.75v-7a2.75 2.75 0 0 0-2.75-2.75h-.75V1a.75.75 0 0 0-1.5 0v.75h-2.5V1Zm-1.5 2.25V4a.75.75 0 0 0 1.5 0v-.75h2.5V4a.75.75 0 0 0 1.5 0v-.75h.75c.69 0 1.25.56 1.25 1.25v1.75h-9.5V4.5c0-.69.56-1.25 1.25-1.25h.75Zm-2 4.5v3.75c0 .69.56 1.25 1.25 1.25h7c.69 0 1.25-.56 1.25-1.25V7.75h-9.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendarSmall;
