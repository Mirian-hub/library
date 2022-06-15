import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBj = ({
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
      d="m15.652 21.913 2.087 25.26c1.996.538 4.095.827 6.261.827 13.255 0 24-10.745 24-24l-32.348-2.087Z"
      fill="#D80027"
    />
    <path
      d="M15.652 24 17.74.827A24.026 24.026 0 0 1 24 0c13.255 0 24 10.745 24 24H15.652Z"
      fill="#FFDA44"
    />
    <path
      d="M0 24c0 11.089 7.52 20.42 17.74 23.173V.827C7.52 3.58 0 12.91 0 24Z"
      fill="#6DA544"
    />
  </svg>
);

export default SvgBj;
