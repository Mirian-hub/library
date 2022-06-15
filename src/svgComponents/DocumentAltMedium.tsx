import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocumentAltMedium = ({
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
      d="M5 4.959a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 3.545l4.414 4.414A2 2 0 0 1 19 9.373V20.96a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-16Zm7.586 0H7v16h10V9.373L12.586 4.96Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDocumentAltMedium;
