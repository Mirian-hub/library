import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAddSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.833 4.333a1 1 0 1 0-2 0v2.334h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h2.334a1 1 0 1 0 0-2H9.833V4.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAddSmall;
