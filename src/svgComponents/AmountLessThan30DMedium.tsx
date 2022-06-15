import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAmountLessThan30DMedium = ({
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
      d="M7 4.959a2 2 0 0 1 2-2h5.586A2 2 0 0 1 16 3.545l4.414 4.414A2 2 0 0 1 21 9.373V20.96a2 2 0 0 1-2 2h-2v-2h2V9.373L14.586 4.96H9v2.009l-2 .007V4.959Zm0 5a1 1 0 0 0-2 0v1H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1v-1a1 1 0 1 0-2 0v1H7v-1Zm6 4.818H4v6.182h9v-6.182Zm-1 2.682a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAmountLessThan30DMedium;
