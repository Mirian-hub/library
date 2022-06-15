import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAccountsPayableLarge = ({
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
      d="M9 3a2 2 0 0 0-2 2v7a1 1 0 1 0 2 0V5h7.586L23 11.414V27H9v-5a1 1 0 1 0-2 0v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11.414A2 2 0 0 0 24.414 10L18 3.586A2 2 0 0 0 16.586 3H9ZM4 16a1 1 0 1 0 0 2h10.92l-2.294 2.293a1 1 0 0 0 1.415 1.414l3.998-3.999h.002a1.002 1.002 0 0 0 0-1.415l-.002-.002-3.998-3.998a1 1 0 0 0-1.415 1.414L14.92 16H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAccountsPayableLarge;
