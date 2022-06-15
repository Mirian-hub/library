import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSessionsMedium = ({
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
      d="M9 2.959a1 1 0 0 1 1 1V5h4V3.959a1 1 0 1 1 2 0V5h3a2 2 0 0 1 2 2v2.474a8.967 8.967 0 0 0-2-1.003V7h-3v.959a9.03 9.03 0 0 0-1.976.218A1 1 0 0 1 14 7.959V7h-4v.959a1 1 0 1 1-2 0V7H5v3.459h4.775a9.036 9.036 0 0 0-1.571 2H5V21h2.956c.367.729.83 1.401 1.373 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3.959a1 1 0 0 1 1-1Zm7 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm2.942-5.415a3 3 0 0 1-.82 1.536L16 16.96v-3a3 3 0 0 1 2.942 3.585Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSessionsMedium;
