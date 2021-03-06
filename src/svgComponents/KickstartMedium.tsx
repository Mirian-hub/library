import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKickstartMedium = ({
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
      d="M19.584 3.99c.16.005.3.01.416.01h1v1c0 .116.005.255.01.415.036 1.077.103 3.096-.99 5.282-.46.918-1.11 1.849-2.02 2.76V18a1 1 0 0 1-.758.97l-4 1A1 1 0 0 1 12 19v-1.714c-.523.223-1.075.442-1.658.654l-.599.217-.45-.45-2-2-.45-.45.217-.599c.212-.583.43-1.135.654-1.658H6a1 1 0 0 1-.97-1.242l1-4A1 1 0 0 1 7 7h4.544c.91-.91 1.84-1.56 2.759-2.02 2.186-1.093 4.205-1.026 5.281-.99ZM14 16.331c.74-.394 1.404-.8 2-1.216v2.104l-2 .5v-1.388ZM9.885 9H7.78l-.5 2h1.388c.394-.74.8-1.404 1.216-2Zm-.723 5.748 1.09 1.09c4.915-1.898 7.038-4.155 7.979-6.035.735-1.471.803-2.79.79-3.823-1.035-.014-2.353.054-3.824.79-1.88.94-4.137 3.063-6.035 7.978ZM16 9.958a1 1 0 1 1-2 .001 1 1 0 0 1 2 0Zm1-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7.293 7.75a1 1 0 1 0-1.414-1.415l-2 2a1 1 0 1 0 1.414 1.414l2-2Zm4-.415a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Zm-5-3.586a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgKickstartMedium;
