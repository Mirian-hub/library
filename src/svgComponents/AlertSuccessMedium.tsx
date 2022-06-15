import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertSuccessMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "currentColor",
        fillOpacity: 1,
      }}
      d="M2.402 11.832c.09-5.3 4.465-9.523 9.766-9.43a9.553 9.553 0 0 1 4.383 1.141 1.199 1.199 0 1 0 1.137-2.11A11.931 11.931 0 0 0 12.21 0C5.582-.113.117 5.164 0 11.79-.113 18.417 5.164 23.882 11.79 24c6.628.113 12.093-5.164 12.21-11.79.012-.679-.035-1.35-.133-2.003a1.202 1.202 0 0 0-2.375.355 9.48 9.48 0 0 1 .106 1.606c-.09 5.3-4.465 9.523-9.766 9.43-5.3-.09-9.523-4.465-9.43-9.766ZM21.25 6.848a1.198 1.198 0 0 0 0-1.696 1.202 1.202 0 0 0-1.7 0l-8.75 8.75-2.753-2.75a1.198 1.198 0 1 0-1.695 1.696l3.601 3.601a1.198 1.198 0 0 0 1.695 0Zm0 0"
    />
  </svg>
);

export default SvgAlertSuccessMedium;
