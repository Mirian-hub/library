import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgZoomOutMedium = ({
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
      d="M11 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a6.97 6.97 0 0 0 4.192-1.394l3.1 3.101a1 1 0 0 0 1.415-1.414l-3.1-3.1A7 7 0 1 0 11 19Zm-2.5-8.041a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2h-5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgZoomOutMedium;
