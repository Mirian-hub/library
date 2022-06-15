import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocumentNotLinkedMedium = ({
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
      d="M7 2.959a2 2 0 0 0-2 2v6a1 1 0 0 0 2 0v-6h5.586L17 9.373V20.96h-4a1 1 0 1 0 0 2h4a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L14 3.545a2 2 0 0 0-1.414-.586H7Z"
      fill="currentColor"
    />
    <path
      d="M2.293 16.252a1 1 0 0 1 1.414 0L5.5 18.045l1.793-1.793a1 1 0 1 1 1.414 1.414l-1.793 1.793 1.793 1.793a1 1 0 1 1-1.414 1.414L5.5 20.873l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDocumentNotLinkedMedium;
