import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWarningIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.252 1.088c.762-1.372 2.735-1.372 3.497 0l8.3 14.94c.74 1.334-.223 2.972-1.748 2.972H2.7C1.175 19 .21 17.362.952 16.029l8.3-14.941ZM11 2.059 2.7 17h16.6L11 2.06ZM11 6a1 1 0 0 1 1 1v4.5a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1Zm1 9a1 1 0 1 0-2 0v.02a1 1 0 0 0 2 0V15Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWarningIcon;
