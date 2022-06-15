import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInviteMedium = ({
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
      d="M3 7.959a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V9.276l-6.35 5.442a1 1 0 0 1-1.3 0L5 9.276v8.683h3a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2v-10Zm3.537 0L12 12.642l5.463-4.683H6.537Zm10.756 7.293a1 1 0 0 1 1.414 0l3 2.999a1 1 0 0 1 0 1.415l-3 3a1 1 0 0 1-1.414-1.414l1.293-1.293H12a1 1 0 0 1 0-2h6.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInviteMedium;
