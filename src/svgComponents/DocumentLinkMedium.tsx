import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocumentLinkMedium = ({
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
      d="M7 2a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0V4h5.586L17 8.414V20h-5a1 1 0 1 0 0 2h5a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Zm-.707 13.121a1 1 0 1 0 1.414 1.415l3.586-3.586a1 1 0 0 0-1.414-1.414L6.293 15.12Zm6.75-5.164a2.182 2.182 0 0 0-3.086 0l-1.25 1.25a1 1 0 0 1-1.414-1.414l1.25-1.25a4.182 4.182 0 1 1 5.914 5.914l-1.25 1.25a1 1 0 0 1-1.414-1.414l1.25-1.25a2.182 2.182 0 0 0 0-3.086Zm-5 8.086a2.182 2.182 0 0 1-3.086-3.086l1.25-1.25a1 1 0 1 0-1.414-1.414l-1.25 1.25a4.182 4.182 0 1 0 5.914 5.914l1.25-1.25a1 1 0 0 0-1.414-1.414l-1.25 1.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDocumentLinkMedium;
