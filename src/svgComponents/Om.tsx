import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOm = ({
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
    <g clipPath="url(#OM_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 24c0 9.097 5.062 17.011 12.522 21.082V2.918C5.062 6.988 0 14.903 0 24Z"
        fill="#D80027"
      />
      <path
        d="M46.507 32.348A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348H1.493A23.946 23.946 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087Z"
        fill="#D80027"
      />
      <path
        d="M23.998 48c10.32 0 19.116-6.513 22.508-15.652H1.49C4.882 41.487 13.68 48 23.998 48Z"
        fill="#6DA544"
      />
      <path
        d="M0 24c0 11.089 7.52 20.42 17.74 23.173V.827C7.52 3.58 0 12.91 0 24Z"
        fill="#D80027"
      />
      <path
        d="m14.682 10.561-2.214-2.213-1.475 1.476-1.476-1.476-2.213 2.213 1.475 1.476-1.476 1.476 2.214 2.213 1.476-1.475 1.475 1.475 2.214-2.213-1.476-1.476 1.476-1.476Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="OM_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgOm;
