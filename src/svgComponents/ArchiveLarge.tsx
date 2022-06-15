import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArchiveLarge = ({
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
      d="M27 7H5v4h22V7ZM5 5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Zm2 8v12h18V13H7Zm4 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArchiveLarge;
