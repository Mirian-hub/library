import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMarkAsAcceptMedium = ({
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
      d="M5 4.959a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 3.545l4.414 4.414A2 2 0 0 1 19 9.373V20.96a2 2 0 0 1-2 2h-3a1 1 0 0 1 0-2h3V9.373L12.586 4.96H7v9a1 1 0 0 1-2 0v-9Z"
      fill="#312B78"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.707 15.252a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 20.545l5.293-5.293a1 1 0 0 1 1.414 0Z"
      fill="#50E2D1"
    />
  </svg>
);

export default SvgMarkAsAcceptMedium;
