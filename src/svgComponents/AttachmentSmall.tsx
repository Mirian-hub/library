import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAttachmentSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 14"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.556 7.09a2.833 2.833 0 1 0 4.007 4.007l1.374-1.374a.667.667 0 0 1 .942.943l-1.373 1.373a4.167 4.167 0 1 1-5.893-5.892l2.24-2.24.942-.942 1.179-1.179a3 3 0 0 1 4.242 4.243L8.096 8.15l-2.004 2.004A1.833 1.833 0 1 1 3.499 7.56l2.946-2.946a.667.667 0 1 1 .943.943L4.442 8.504a.5.5 0 1 0 .707.707l2.003-2.003 2.122-2.122A1.667 1.667 0 1 0 6.917 2.73L5.738 3.908l-.943.943L2.556 7.09Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAttachmentSmall;
