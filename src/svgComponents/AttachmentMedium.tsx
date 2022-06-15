import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAttachmentMedium = ({
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
      d="M6.834 13.094a4.25 4.25 0 0 0 6.01 6.01l2.06-2.06a1 1 0 0 1 1.415 1.414l-2.06 2.06a6.25 6.25 0 0 1-8.84-8.838l3.36-3.36 1.413-1.414L11.96 5.14a4.5 4.5 0 1 1 6.364 6.364l-3.182 3.182-3.005 3.005a2.75 2.75 0 0 1-3.89-3.89l4.42-4.419a1 1 0 1 1 1.415 1.415l-4.42 4.419a.75.75 0 0 0 1.06 1.06l3.006-3.005 3.182-3.181a2.5 2.5 0 0 0-3.536-3.536L11.607 8.32l-1.415 1.414-3.358 3.359Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAttachmentMedium;
