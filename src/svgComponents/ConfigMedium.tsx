import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgConfigMedium = ({
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
      d="M10.485 7.693 8.66 5.867a4.105 4.105 0 1 1-3.751 3.751l1.825 1.826a2.652 2.652 0 1 0 3.751-3.751Zm-2.411 2.411L5.126 7.157l-.012-.012a.947.947 0 0 0-1.54.25 6 6 0 0 0 7.025 8.348l5.337 5.337a3 3 0 1 0 4.243-4.242l-5.37-5.37a6 6 0 0 0-8.373-6.935.947.947 0 0 0-.25 1.54l.012.012 2.947 2.948a.758.758 0 0 1-1.071 1.071Zm5.84 3.298 4.85 4.85a1 1 0 1 1-1.414 1.414l-4.84-4.84a6.034 6.034 0 0 0 1.405-1.424Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgConfigMedium;
