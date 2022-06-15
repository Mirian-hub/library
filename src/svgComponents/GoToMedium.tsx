import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGoToMedium = ({
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
      d="M14 3.959a1 1 0 1 0 0 2h3.586l-5.793 5.793a1 1 0 0 0 1.414 1.414L19 7.373v3.586a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1h-6Z"
      fill="currentColor"
    />
    <path
      d="M4 5.959a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v4H5v-12h4a1 1 0 1 0 0-2H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGoToMedium;
