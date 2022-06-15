import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSg = ({
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
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#F0F0F0"
    />
    <path d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24" fill="#D80027" />
    <path
      d="M14.609 12.522a7.306 7.306 0 0 1 5.74-7.135 7.304 7.304 0 1 0 0 14.269 7.306 7.306 0 0 1-5.74-7.134ZM24 5.74l.518 1.593h1.677l-1.357.986.518 1.594L24 8.928l-1.356.985.518-1.594-1.356-.986h1.676L24 5.74Z"
      fill="#F0F0F0"
    />
    <path
      d="m19.934 8.87.518 1.594h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.518-1.594-1.356-.985h1.677l.518-1.595ZM28.068 8.87l.518 1.594h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.519-1.594-1.357-.985h1.677l.518-1.595ZM26.501 13.565l.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595ZM21.5 13.565l.517 1.595h1.677l-1.356.985.518 1.594-1.356-.985-1.357.985.518-1.594-1.356-.985h1.677l.518-1.595Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgSg;
