import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgApproveDocumentMedium = ({
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
      d="M7 2.959a2 2 0 0 0-2 2v5a1 1 0 0 0 2 0v-5h5.586L17 9.373V20.96h-1a1 1 0 1 0 0 2h1a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L14 3.545a2 2 0 0 0-1.414-.586H7Z"
      fill="currentColor"
    />
    <path
      d="M13.707 19.248A1 1 0 0 0 13 17.541h-1.02A5 5 0 1 0 7 23a1 1 0 1 0 0-2 3 3 0 1 1 2.965-3.459H9a1 1 0 0 0-.707 1.707l2 2a1 1 0 0 0 1.414 0l2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgApproveDocumentMedium;
