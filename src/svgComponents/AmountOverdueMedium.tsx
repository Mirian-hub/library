import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAmountOverdueMedium = ({
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
      d="M7 4.959a2 2 0 0 1 2-2h5.586A2 2 0 0 1 16 3.545l4.414 4.414A2 2 0 0 1 21 9.373V20.96a2 2 0 0 1-2 2h-1.737a1.981 1.981 0 0 0 0-2H19V9.373L14.586 4.96H9v2.256a2.022 2.022 0 0 0-2 0V4.96Zm2.761 5.161c-.755-1.402-2.767-1.402-3.522 0L.913 20.01c-.717 1.333.248 2.949 1.761 2.949h10.652c1.513 0 2.478-1.616 1.76-2.948L9.762 10.12ZM8 11.068l5.326 9.89H2.674L8 11.069Zm1 3.89a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0v-1.5ZM9 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAmountOverdueMedium;
