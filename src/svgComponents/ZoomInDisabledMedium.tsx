import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgZoomInDisabledMedium = ({
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
      d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l3.101 3.1a1 1 0 0 1-1.414 1.415l-3.1-3.1ZM7 3.46a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H8v1.5a1 1 0 0 1-2 0v-1.5H4.5a1 1 0 1 1 0-2H6v-1.5a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    <path
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      d="M1 14.586 14.435 1.151"
    />
  </svg>
);

export default SvgZoomInDisabledMedium;
