import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGw = ({
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
      d="M24 0c-2.166 0-4.265.289-6.26.827L15.651 24l2.087 23.173c1.996.538 4.095.827 6.261.827 13.255 0 24-10.745 24-24S37.255 0 24 0Z"
      fill="#FFDA44"
    />
    <path
      d="m15.652 24 2.087 23.173c1.996.538 4.095.827 6.261.827 13.255 0 24-10.745 24-24H15.652Z"
      fill="#6DA544"
    />
    <path
      d="M0 24c0 9.097 5.062 17.011 12.522 21.082V2.918C5.062 6.988 0 14.903 0 24Z"
      fill="#D80027"
    />
    <path
      d="M0 24c0 11.089 7.52 20.42 17.74 23.173V.827C7.52 3.58 0 12.91 0 24Z"
      fill="#D80027"
    />
    <path
      d="m9.07 17.739 1.553 4.783h5.03l-4.069 2.956 1.554 4.783-4.069-2.956-4.068 2.956 1.554-4.783-4.069-2.956h5.03l1.553-4.783Z"
      fill="#000"
    />
  </svg>
);

export default SvgGw;
