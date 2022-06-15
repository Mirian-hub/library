import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocCenterMedium = ({
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
      d="M7.207 16.793a1 1 0 1 1-1.414 1.414l1.414-1.414Zm-4.414-1.586a1 1 0 1 1 1.414-1.414l-1.414 1.414Zm3 3-3-3 1.414-1.414 3 3-1.414 1.414Z"
      fill="currentColor"
    />
    <path
      d="M13.5 13.5a1 1 0 1 1 0 2v-2Zm-10 2a1 1 0 1 1 0-2v2Zm10 0h-10v-2h10v2Z"
      fill="currentColor"
    />
    <path
      d="M5.793 10.793a1 1 0 0 1 1.414 1.414l-1.414-1.414Zm-1.586 4.414a1 1 0 0 1-1.414-1.414l1.414 1.414Zm3-3-3 3-1.414-1.414 3-3 1.414 1.414ZM15.793 20.793a1 1 0 0 0 1.414 1.414l-1.414-1.414Zm4.414-1.586a1 1 0 0 0-1.414-1.414l1.414 1.414Zm-3 3 3-3-1.414-1.414-3 3 1.414 1.414Z"
      fill="currentColor"
    />
    <path
      d="M17.207 14.793a1 1 0 0 0-1.414 1.414l1.414-1.414Zm1.586 4.414a1 1 0 0 0 1.414-1.414l-1.414 1.414Zm-3-3 3 3 1.414-1.414-3-3-1.414 1.414Z"
      fill="currentColor"
    />
    <path
      d="M9.5 17.5a1 1 0 1 0 0 2v-2Zm10 2a1 1 0 1 0 0-2v2Zm-10 0h10v-2h-10v2Z"
      fill="currentColor"
    />
    <path
      d="M10.5 8.5h10M20.5 12.5v-7a1 1 0 0 0-1-1H14a.5.5 0 0 1-.5-.5v-.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgDocCenterMedium;
