import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCancelChangesMedium = ({
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
      d="M5.707 5.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-14-14Zm-.414 10 2.379-2.379 1.414 1.414L7 16.414V18h1.586l2.086-2.086 1.414 1.414-2.379 2.38A1 1 0 0 1 9 20H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707ZM17.586 9l-2.672 2.672 1.414 1.414 3.38-3.379a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.415 0l-3.379 3.379 1.414 1.414L16 7.414 17.586 9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCancelChangesMedium;
