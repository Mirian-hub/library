import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertBellMedium = ({
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
      d="M12.02 3a1 1 0 0 0-1 1v1c0 .033.002.066.005.099A5.002 5.002 0 0 0 7.02 10v2c0 .576-.994 2.145-1.837 3.374-.467.679.013 1.626.837 1.626h12c.824 0 1.304-.947.838-1.626-.844-1.229-1.838-2.798-1.838-3.374v-2c0-2.42-1.72-4.44-4.005-4.901.004-.033.005-.066.005-.099V4a1 1 0 0 0-1-1Zm3 9v-2a3 3 0 0 0-6 0v2c0 .585-.215 1.117-.33 1.387-.15.346-.341.708-.537 1.049-.105.185-.218.374-.336.564h8.406c-.117-.19-.23-.38-.336-.564a10.578 10.578 0 0 1-.536-1.049c-.116-.27-.33-.802-.33-1.387Zm-4 6a1 1 0 1 0 2 0h2a3 3 0 0 1-6 0h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertBellMedium;
