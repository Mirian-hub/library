import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPayMedium = ({
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
      d="M4 4.541a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4a1 1 0 1 0 0-2H4v-6h15v.5a1 1 0 1 0 2 0v-5.5a2 2 0 0 0-2-2H4Zm15 4v-2H4v2h15ZM6 14.5a1 1 0 0 1 1-1h5.5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm12.707.293a1 1 0 1 0-1.414 1.414l1.293 1.293H12a1 1 0 1 0 0 2h6.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414v-.001l-3-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPayMedium;
