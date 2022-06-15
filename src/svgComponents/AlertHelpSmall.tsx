import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertHelpSmall = ({
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
      d="M1.75 8a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0ZM8 .25a7.75 7.75 0 1 0 0 15.5A7.75 7.75 0 0 0 8 .25ZM6.967 4.061a2.93 2.93 0 1 1 1.04 5.671.75.75 0 0 1 .001-1.5 1.431 1.431 0 1 0-1.088-2.36.75.75 0 0 1-1.14-.974c.32-.374.727-.662 1.187-.837ZM8 10.62a.75.75 0 0 1 .75.75v.014a.75.75 0 1 1-1.5 0v-.014a.75.75 0 0 1 .75-.75Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertHelpSmall;
