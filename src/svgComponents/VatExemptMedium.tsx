import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVatExemptMedium = ({
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
      d="M6 2c-1.105 0-2 .894-2 1.996v15.969c0 1.102.895 1.996 2 1.996h8a.999.999 0 1 0 0-1.996H6V3.996h8.52L18 8.338v5.68a.999.999 0 0 0 2 0v-5.68c0-.453-.155-.893-.438-1.247l-3.48-4.342A2.001 2.001 0 0 0 14.518 2H6Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 6.532c-1.38 0-2.5 1.117-2.5 2.495A2.498 2.498 0 0 0 9 11.522c1.38 0 2.5-1.117 2.5-2.495A2.498 2.498 0 0 0 9 6.532Zm-.5 2.495a.5.5 0 1 1 .999.001.5.5 0 0 1-.999 0ZM15 12.52c-1.38 0-2.5 1.118-2.5 2.496A2.498 2.498 0 0 0 15 17.51c1.38 0 2.5-1.117 2.5-2.495A2.498 2.498 0 0 0 15 12.52Zm-.5 2.496a.5.5 0 1 1 .999 0 .5.5 0 0 1-.999 0Z"
      fill="currentColor"
    />
    <path
      d="M7.79 16.218a.997.997 0 0 1 .005-1.411l7-6.946a1.001 1.001 0 0 1 1.414.005.997.997 0 0 1-.004 1.411l-7 6.945a1.001 1.001 0 0 1-1.414-.004Z"
      fill="currentColor"
    />
    <path
      d="M18.707 17.304a1.001 1.001 0 0 0-1.414 0 .997.997 0 0 0 0 1.412l1.293 1.29-1.293 1.29a.997.997 0 0 0 0 1.412c.39.39 1.024.39 1.414 0L20 21.418l1.293 1.29c.39.39 1.024.39 1.414 0a.997.997 0 0 0 0-1.412l-1.293-1.29 1.293-1.29a.997.997 0 0 0 0-1.412 1.001 1.001 0 0 0-1.414 0L20 18.594l-1.293-1.29Z"
      fill="#C21F3A"
    />
  </svg>
);

export default SvgVatExemptMedium;
