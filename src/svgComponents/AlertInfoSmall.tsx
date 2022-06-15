import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertInfoSmall = ({
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
      d="M8 1.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM.25 8a7.75 7.75 0 1 1 15.5 0A7.75 7.75 0 0 1 .25 8ZM8 7.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25ZM8.75 5a.75.75 0 0 0-1.5 0v.02a.75.75 0 0 0 1.5 0V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertInfoSmall;
