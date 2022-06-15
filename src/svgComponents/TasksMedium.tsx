import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTasksMedium = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 2h-2a3.001 3.001 0 0 0-2.83 2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.17A3.001 3.001 0 0 0 13 2Zm2.83 4H17v12H7V6h1.17A3.001 3.001 0 0 0 11 8h2a3.001 3.001 0 0 0 2.83-2ZM11 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-2 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTasksMedium;
