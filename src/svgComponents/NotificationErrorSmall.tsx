import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNotificationErrorSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.553 8.596a1.333 1.333 0 0 1 0-1.192l2.333-4.667A1.333 1.333 0 0 1 5.08 2h5.842c.505 0 .967.285 1.193.737l2.333 4.667c.188.375.188.817 0 1.192l-2.333 4.667A1.333 1.333 0 0 1 10.92 14H5.08c-.505 0-.967-.285-1.193-.737L1.553 8.596Zm3.526-5.263L2.745 8l2.334 4.667h5.842L13.255 8 10.92 3.333H5.08Zm.45 2.196c.26-.26.682-.26.942 0L8 7.057 9.529 5.53a.667.667 0 0 1 .942.942L8.943 8l1.528 1.529a.667.667 0 0 1-.942.942L8 8.943 6.471 10.47a.667.667 0 1 1-.942-.942L7.057 8 5.53 6.471a.667.667 0 0 1 0-.942Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNotificationErrorSmall;
