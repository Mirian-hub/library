import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAccountsReceivableLarge = ({
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
      d="M9 3a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0V5h7.586L23 11.414V27H9v-2a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11.414A2 2 0 0 0 24.414 10L18 3.586A2 2 0 0 0 16.586 3H9Zm9 13a1 1 0 1 1 0 2H7.08l2.294 2.293a1 1 0 1 1-1.415 1.414l-3.998-3.999h-.002a.997.997 0 0 1 0-1.415l.002-.001 3.998-4a1 1 0 0 1 1.415 1.415L7.08 16H18Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAccountsReceivableLarge;
