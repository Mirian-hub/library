import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMh = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M24 48c13.255 0 24-10.745 24-24 0-4.028-.994-7.823-2.747-11.156L23.972 24.028l11.184-21.28A23.893 23.893 0 0 0 24 0C10.745 0 0 10.745 0 24a23.925 23.925 0 0 0 7.03 16.97A23.925 23.925 0 0 0 24 48Z"
      fill="#0052B4"
    />
    <path
      d="M45.228 12.87a23.993 23.993 0 0 0-4.285-5.812 23.99 23.99 0 0 0-5.813-4.285L7.002 40.999l38.226-28.13Z"
      fill="#F0F0F0"
    />
    <path
      d="m7.002 40.999 38.226-28.13a23.993 23.993 0 0 0-4.285-5.812L7.002 41Z"
      fill="#FF9811"
    />
    <path
      d="m20.841 14.074-2.93 1.379 1.56 2.838-3.183-.608-.403 3.215-2.217-2.365-2.217 2.365-.403-3.215-3.183.608 1.56-2.838-2.93-1.379 2.93-1.379-1.56-2.838 3.182.608.404-3.215 2.217 2.365 2.217-2.365.403 3.215 3.183-.608-1.56 2.838 2.93 1.379Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgMh;
