import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEditMedium = ({
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
      d="M18.707 3.293a1 1 0 0 0-1.414 0l-8 8A1 1 0 0 0 9 12v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .707-.293l8-8a1 1 0 0 0 0-1.414l-3-3ZM11 14v-1.586l7-7L19.586 7l-7 7H11ZM6 4.959a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H6v-12h5a1 1 0 1 0 0-2H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEditMedium;
