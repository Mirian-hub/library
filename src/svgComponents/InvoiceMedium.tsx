import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInvoiceMedium = ({
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
      d="M7 2.959a2 2 0 0 0-2 2v6a1 1 0 0 0 2 0v-6h5.586L17 9.373V20.96h-5a1 1 0 1 0 0 2h5a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L14 3.545a2 2 0 0 0-1.414-.586H7Zm-2 19v-2H3a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2H7v2a1 1 0 0 1-2 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInvoiceMedium;
