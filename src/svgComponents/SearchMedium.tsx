import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSearchMedium = ({
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
      d="M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-.287 4.713a6 6 0 1 1 1.342-1.48c.023.019.045.039.066.06l4.243 4.242a1 1 0 0 1-1.414 1.415l-4.237-4.237Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearchMedium;
