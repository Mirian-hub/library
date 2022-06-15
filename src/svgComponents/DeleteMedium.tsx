import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDeleteMedium = ({
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
      d="M10 2.959a2 2 0 0 0-2 2v2H4a1 1 0 0 0 0 2h.08L5 20.005a3 3 0 0 0 3 2.954h8a3 3 0 0 0 3-2.954l.92-11.046H20a1 1 0 1 0 0-2h-4v-2a2 2 0 0 0-2-2h-4Zm4 4v-2h-4v2h4Zm-5 2H6.087l.91 10.917a1 1 0 0 1 .003.083 1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 1 1 0 0 1 .003-.083l.91-10.917H9Zm1 2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0v-6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDeleteMedium;
