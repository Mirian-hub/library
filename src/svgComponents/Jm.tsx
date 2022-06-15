import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgJm = ({
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
    <g clipPath="url(#JM_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <path
        d="M38.612 4.961A23.892 23.892 0 0 0 24 0 23.893 23.893 0 0 0 9.39 4.961L24 19.573 38.612 4.96Z"
        fill="#6DA544"
      />
      <path
        d="M4.961 9.388A23.893 23.893 0 0 0 0 24c0 5.499 1.85 10.565 4.961 14.612L19.573 24 4.96 9.388Z"
        fill="#000"
      />
      <path
        d="M9.389 43.039A23.892 23.892 0 0 0 24 48c5.5 0 10.565-1.85 14.612-4.961L24 28.427 9.39 43.04Z"
        fill="#6DA544"
      />
      <path
        d="M43.04 38.611A23.892 23.892 0 0 0 48 24c0-5.499-1.85-10.565-4.96-14.612L28.427 24l14.611 14.611Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="JM_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgJm;
