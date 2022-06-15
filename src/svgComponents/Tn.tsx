import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTn = ({
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
      fill="#D80027"
    />
    <path
      d="M24 35.478c6.34 0 11.479-5.139 11.479-11.478 0-6.34-5.14-11.478-11.479-11.478-6.339 0-11.478 5.139-11.478 11.478 0 6.34 5.14 11.478 11.478 11.478Z"
      fill="#F0F0F0"
    />
    <path
      d="m25.414 19.611 1.97 2.714 3.188-1.034-1.972 2.711 1.969 2.713-3.188-1.038-1.972 2.712.002-3.353-3.188-1.038 3.189-1.034.002-3.353Z"
      fill="#D80027"
    />
    <path
      d="M26.609 30.783a6.783 6.783 0 1 1 3.226-12.75 8.348 8.348 0 1 0 0 11.935 6.75 6.75 0 0 1-3.226.815Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgTn;
