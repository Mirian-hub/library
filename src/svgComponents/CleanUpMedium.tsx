import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCleanUpMedium = ({
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
      d="M9 5.959a3 3 0 1 1 6 0v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7Zm3-1a1 1 0 0 0-1 1v6h2v-6a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12.959a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3Zm2 1v1h10v-1H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.051 15.643A1 1 0 0 1 6 14.959h12a1 1 0 0 1 .949.684l1.56 4.683a2 2 0 0 1-1.896 2.633H5.386a2 2 0 0 1-1.897-2.633l1.561-4.683Zm1.67 1.316-1.334 4h13.226l-1.334-4H6.721Z"
      fill="currentColor"
    />
    <path
      d="M8 18.959a1 1 0 0 1 1-1M11 18.959a1 1 0 0 1 1-1M14 18.959a1 1 0 0 1 1-1"
      fill="currentColor"
    />
  </svg>
);

export default SvgCleanUpMedium;
