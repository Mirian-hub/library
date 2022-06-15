import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKp = ({
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
    <path
      d="M24.001 0C16.727 0 10.21 3.237 5.808 8.348h36.386C37.794 3.237 31.275 0 24.001 0ZM42.194 39.652H5.808C10.21 44.763 16.728 48 24.001 48c7.274 0 13.792-3.237 18.193-8.348Z"
      fill="#0052B4"
    />
    <path
      d="M44.477 11.478H3.523A23.886 23.886 0 0 0 0 24c0 4.589 1.289 8.876 3.523 12.522h40.954A23.886 23.886 0 0 0 48 24c0-4.589-1.289-8.876-3.523-12.522Z"
      fill="#D80027"
    />
    <path
      d="M14.765 33.235a9.235 9.235 0 1 0 0-18.47 9.235 9.235 0 0 0 0 18.47Z"
      fill="#F0F0F0"
    />
    <path
      d="m14.766 14.765 2.071 6.377h6.717l-5.436 3.942 2.088 6.396-5.44-3.96-5.433 3.952 2.08-6.388-5.43-3.942h6.71l2.073-6.377Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgKp;
