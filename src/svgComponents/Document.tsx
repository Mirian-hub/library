import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocument = ({
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
      d="M7 2.959a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L14 3.545a2 2 0 0 0-1.414-.586H7Zm0 2h5.586L17 9.373V20.96H7v-16Zm2.5 11.5a1 1 0 1 0 0 2H12a1 1 0 0 0 0-2H9.5Zm-1-2.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm1-4.5a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2.959a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L14 3.545a2 2 0 0 0-1.414-.586H7Zm0 2h5.586L17 9.373V20.96H7v-16Zm2.5 11.5a1 1 0 1 0 0 2H12a1 1 0 0 0 0-2H9.5Zm-1-2.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm1-4.5a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDocument;
