import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCompanyMedium = ({
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
      d="M4 3.5A1.5 1.5 0 0 1 5.5 2h13A1.5 1.5 0 0 1 20 3.5v18a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 21.5v-18ZM6 4v17h7v-4.8c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2V21h2V4H6Zm2 2.2c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2H8.2a.2.2 0 0 1-.2-.2V6.2Zm5.2-.2a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h2.6a.2.2 0 0 0 .2-.2V6.2a.2.2 0 0 0-.2-.2h-2.6ZM8 11.2c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2H8.2a.2.2 0 0 1-.2-.2v-2.6Zm.2 4.8a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h2.6a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2H8.2Zm4.8-4.8c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2h-2.6a.2.2 0 0 1-.2-.2v-2.6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCompanyMedium;
