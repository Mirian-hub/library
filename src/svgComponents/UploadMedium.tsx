import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUploadMedium = ({
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
      d="M7 2.959a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0v-3h5.586L17 9.373V20.96h-7a1 1 0 1 0 0 2h7a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L14 3.545a2 2 0 0 0-1.414-.586H7ZM2.293 14.252a1 1 0 1 0 1.414 1.414L5 14.373v7.586a1 1 0 0 0 2 0v-7.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUploadMedium;
