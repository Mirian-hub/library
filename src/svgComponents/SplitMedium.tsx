import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSplitMedium = ({
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
      d="M6 4.959a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9.446 8.99a4 4 0 1 0-1.414 1.414l2.574 2.574-2.548 2.549a4 4 0 1 0 1.404 1.425L20.706 5.707a1 1 0 0 0-1.414-1.414l-7.272 7.272-2.575-2.574ZM6 16.959a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7.793-2.166a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSplitMedium;
