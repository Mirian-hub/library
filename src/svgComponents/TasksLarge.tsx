import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTasksLarge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3h4c1.306 0 2.418.835 2.83 2H23a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.17A3.001 3.001 0 0 1 14 3Zm4 6a3.001 3.001 0 0 0 2.83-2H23v18H9V7h2.17A3.001 3.001 0 0 0 14 9h4Zm-4-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm-2 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTasksLarge;
