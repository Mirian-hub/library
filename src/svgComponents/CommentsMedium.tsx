import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCommentsMedium = ({
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
      d="M20 6.959H4v10h.9c1.16 0 2.1.94 2.1 2.1v1.014l3.577-2.555a3 3 0 0 1 1.743-.56H20v-10Zm-16-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.68a1 1 0 0 0-.58.186L6.58 22.83A1 1 0 0 1 5 22.016v-2.957a.1.1 0 0 0-.1-.1H4a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2Zm2 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCommentsMedium;
