import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPurchases = ({
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
      d="M2 4a1 1 0 0 1 1-1h2.165a2 2 0 0 1 1.968 1.642L8.835 14h9.384l1.5-6H10a1 1 0 0 1 0-2h9.72a2 2 0 0 1 1.94 2.485l-1.5 6A2 2 0 0 1 18.22 16H8.834a2 2 0 0 1-1.968-1.642L5.165 5H3a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPurchases;
