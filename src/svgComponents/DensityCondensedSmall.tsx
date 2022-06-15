import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDensityCondensedSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 .75a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H1Zm0 10.5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Zm-1-6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1 2.5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDensityCondensedSmall;
