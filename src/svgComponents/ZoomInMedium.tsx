import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgZoomInMedium = ({
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
      d="M16 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l3.101 3.1a1 1 0 0 1-1.414 1.415l-3.1-3.1ZM11 8.46a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H12v1.5a1 1 0 0 1-2 0v-1.5H8.5a1 1 0 0 1 0-2H10v-1.5a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgZoomInMedium;
