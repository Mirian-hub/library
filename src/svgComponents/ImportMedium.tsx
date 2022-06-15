import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImportMedium = ({
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
      d="m12.708 17.665 3.999-3.999a1 1 0 1 0-1.414-1.414L13 14.545V4.959a1 1 0 1 0-2 0v9.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3.999 4a1 1 0 0 0 1.415 0ZM4 12.96a1 1 0 1 0-2 0v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7a1 1 0 1 0-2 0v7H4v-7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgImportMedium;
