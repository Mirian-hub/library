import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAmountTotalYenMedium = ({
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
      d="M12 20.459V19H9v-1.541h3v-1.5H9l3-5h-2l-2 3.5-2-3.5H4l3 5H4v1.5h3V19H4v1.459h3v1.5h2v-1.5h3Z"
      fill="currentColor"
    />
    <path
      d="M15 21.959h4a1 1 0 0 0 1-1V9.373a1 1 0 0 0-.293-.707l-4.414-4.414a1 1 0 0 0-.707-.293H9a1 1 0 0 0-1 1v3"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgAmountTotalYenMedium;
