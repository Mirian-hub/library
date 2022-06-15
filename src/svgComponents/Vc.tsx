import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVc = ({
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
    <g clipPath="url(#VC_svg__a)">
      <path
        d="M35.478 2.918A23.893 23.893 0 0 0 23.999 0a23.893 23.893 0 0 0-11.478 2.918L10.434 24l2.087 21.082A23.893 23.893 0 0 0 24 48c4.158 0 8.069-1.058 11.479-2.918L37.565 24 35.478 2.918Z"
        fill="#FFDA44"
      />
      <path
        d="M12.522 45.082V2.918C5.062 6.988 0 14.903 0 24c0 9.097 5.061 17.011 12.522 21.082Z"
        fill="#338AF3"
      />
      <path
        d="M48.001 24c0-9.097-5.061-17.011-12.521-21.082v42.164C42.94 41.012 48 33.097 48 24ZM18.783 30.26 14.61 24l4.174-6.26L22.957 24l-4.174 6.26ZM29.218 30.26 25.044 24l4.174-6.26L33.392 24l-4.174 6.26ZM24.001 38.609l-4.174-6.261 4.174-6.261 4.174 6.26-4.174 6.262Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="VC_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVc;
