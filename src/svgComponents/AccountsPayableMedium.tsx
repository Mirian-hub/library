import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAccountsPayableMedium = ({
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
      d="M7 2a2 2 0 0 0-2 2v5a1 1 0 0 0 2 0V4h5.586L17 8.414V20H7v-3a1 1 0 1 0-2 0v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Zm3.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12H3a1 1 0 1 0 0 2h7.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3A.997.997 0 0 0 14 13.01m-.294-.717-2.999-3m3 3 .007.008-.008-.008Zm.007.008a.996.996 0 0 1 .21.317l-.21-.318Zm.21.317a.996.996 0 0 1 .076.374l-.076-.374Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAccountsPayableMedium;
