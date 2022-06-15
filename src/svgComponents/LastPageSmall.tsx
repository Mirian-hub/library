import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLastPageSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.959a1 1 0 1 0-2 0v10a1 1 0 0 0 2 0v-10ZM6.707 6.293l-.002-.003-4.998-4.997A1 1 0 0 0 .293 2.707L4.586 7 .293 11.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414Z"
    />
  </svg>
);

export default SvgLastPageSmall;
