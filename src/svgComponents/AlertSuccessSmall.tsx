import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertSuccessSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "currentColor",
        fillOpacity: 1,
      }}
      d="M1.602 7.887a6.4 6.4 0 0 1 9.433-5.524.8.8 0 1 0 .758-1.41A7.994 7.994 0 0 0 8.141 0C3.723-.074.078 3.441 0 7.86c-.074 4.417 3.441 8.062 7.86 8.14 4.417.074 8.062-3.441 8.14-7.86a7.971 7.971 0 0 0-.09-1.335.797.797 0 0 0-.91-.672.805.805 0 0 0-.672.91 6.4 6.4 0 1 1-12.727.844Zm12.562-3.32a.802.802 0 0 0 0-1.133.797.797 0 0 0-1.129 0L7.2 9.27 5.367 7.434a.802.802 0 0 0-1.133 1.132l2.399 2.399a.802.802 0 0 0 1.133 0Zm0 0"
    />
  </svg>
);

export default SvgAlertSuccessSmall;
