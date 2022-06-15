import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSaveMedium = ({
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
      d="M3 5a2 2 0 0 1 2-2h10.172a3 3 0 0 1 2.12.879l2.83 2.828A3 3 0 0 1 21 8.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm6 14h6v-5H9v5Zm8 0v-5.5a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 7 13.5V19H5V5h2v2.5A1.5 1.5 0 0 0 8.5 9h5A1.5 1.5 0 0 0 15 7.5V5h.172a1 1 0 0 1 .707.293l2.828 2.828a1 1 0 0 1 .293.707V19h-2ZM9 5h4v2H9V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSaveMedium;
