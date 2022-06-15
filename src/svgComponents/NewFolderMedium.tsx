import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNewFolderMedium = ({
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
      d="M4 4.959a2 2 0 0 0-2 2v6a1 1 0 0 0 2 0v-6h3.586l1.707 1.707a1 1 0 0 0 .707.293h10v10h-6a1 1 0 1 0 0 2h6a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2h-9.586L8.707 5.252A1 1 0 0 0 8 4.959H4ZM7 13a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H8v3a1 1 0 1 1-2 0v-3H3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    <path
      d="M4 4.959a2 2 0 0 0-2 2v6a1 1 0 0 0 2 0v-6h3.586l1.707 1.707a1 1 0 0 0 .707.293h10v10h-6a1 1 0 1 0 0 2h6a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2h-9.586L8.707 5.252A1 1 0 0 0 8 4.959H4Z"
      fill="currentColor"
    />
    <path
      d="M7 13a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H8v3a1 1 0 1 1-2 0v-3H3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNewFolderMedium;
