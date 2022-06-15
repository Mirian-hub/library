import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAmountTotalDollarMedium = ({
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
      d="M9 2.959a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h5.586L19 9.373V20.96h-4a1 1 0 1 0 0 2h4a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L16 3.545a2 2 0 0 0-1.414-.586H9Zm-.08 12.535c2.055.39 3 1.485 3 2.88 0 1.695-1.29 2.895-3.315 3.06v1.53h-1.11v-1.53c-2.1-.165-3.435-1.305-3.495-3.465l2.115-.21c.03 1.245.645 1.755 1.38 1.92v-2.4l-.435-.075c-2.025-.345-2.805-1.47-2.805-2.97 0-1.62 1.275-2.73 3.24-2.895v-1.38h1.11v1.395c1.86.165 3.21 1.155 3.21 2.985l-2.1.195c0-.84-.435-1.275-1.11-1.425v2.325l.315.06Zm-1.425-2.415c-.69.12-1.125.495-1.125 1.05 0 .495.18.855 1.125 1.095v-2.145Zm1.11 6.615c.705-.12 1.17-.51 1.17-1.095 0-.525-.3-.9-1.17-1.125v2.22Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAmountTotalDollarMedium;
