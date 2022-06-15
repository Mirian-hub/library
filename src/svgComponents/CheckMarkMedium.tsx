import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCheckMarkMedium = ({
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
      d="M13.138 4.195c.26.26.26.683 0 .943l-5.333 5.333a.667.667 0 0 1-.943 0l-2-2a.667.667 0 1 1 .943-.942l1.528 1.528 4.862-4.862c.26-.26.683-.26.943 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheckMarkMedium;
