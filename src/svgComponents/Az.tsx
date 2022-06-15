import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAz = ({
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
    <g clipPath="url(#AZ_svg__a)">
      <path
        d="M48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.949 23.949 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.946 23.946 0 0 0 48 24Z"
        fill="#D80027"
      />
      <path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#6DA544"
      />
      <path
        d="M1.493 15.652h45.014C43.117 6.513 34.32 0 24 0 13.68 0 4.884 6.513 1.493 15.652Z"
        fill="#338AF3"
      />
      <path
        d="M24.522 30.783a6.783 6.783 0 1 1 3.226-12.75 8.348 8.348 0 1 0 0 11.935 6.75 6.75 0 0 1-3.226.815Z"
        fill="#F0F0F0"
      />
      <path
        d="m29.739 19.304.898 2.527 2.422-1.151-1.151 2.422 2.527.898-2.527.898 1.151 2.422-2.422-1.151-.898 2.527-.898-2.527-2.422 1.151 1.151-2.422L25.043 24l2.527-.898-1.151-2.422 2.422 1.151.898-2.527Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="AZ_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAz;
