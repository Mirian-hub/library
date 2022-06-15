import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLinkMedium = ({
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
      d="M16.95 7.05a2 2 0 0 0-2.829 0L12 9.172a1 1 0 1 1-1.414-1.415l2.121-2.121a4 4 0 0 1 5.657 5.657l-2.121 2.121A1 1 0 0 1 14.828 12l2.122-2.121a2 2 0 0 0 0-2.829ZM14.12 9.88a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414l2.828-2.828a1 1 0 0 1 1.414 0Zm-4.242 7.07a2 2 0 0 1-2.829-2.828L9.172 12a1 1 0 1 0-1.415-1.414l-2.121 2.121a4 4 0 0 0 5.657 5.657l2.121-2.121A1 1 0 0 0 12 14.828L9.879 16.95Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.95 7.05a2 2 0 0 0-2.829 0L12 9.172a1 1 0 1 1-1.414-1.415l2.121-2.121a4 4 0 0 1 5.657 5.657l-2.121 2.121A1 1 0 0 1 14.828 12l2.122-2.121a2 2 0 0 0 0-2.829ZM14.12 9.88a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414l2.828-2.828a1 1 0 0 1 1.414 0Zm-4.242 7.07a2 2 0 0 1-2.829-2.828L9.172 12a1 1 0 1 0-1.415-1.414l-2.121 2.121a4 4 0 0 0 5.657 5.657l2.121-2.121A1 1 0 0 0 12 14.828L9.879 16.95Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLinkMedium;
