import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAmountMoreThan30DMedium = ({
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
      d="M7 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 16 2.584l4.414 4.414A2 2 0 0 1 21 8.413V20a2 2 0 0 1-2 2h-2v-2h2V8.413L14.586 4H9v2.009l-2 .007V4Zm0 5a1 1 0 1 0-2 0v1H4a2 2 0 0 0-2 2V19.998a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V9a1 1 0 1 0-2 0v1H7V9Zm6 4.817H4V20h9v-6.182Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAmountMoreThan30DMedium;
