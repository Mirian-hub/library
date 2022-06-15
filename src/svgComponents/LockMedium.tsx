import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLockMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path stroke="#E6E6E6" strokeWidth={0.1} d="M1 .876h24v24H1z" />
    <path stroke="#E6E6E6" strokeWidth={0.1} d="M3 2.897h20v20H3z" />
    <rect
      x={4}
      y={3.897}
      width={18}
      height={18}
      rx={2}
      stroke="#B8B4E4"
      strokeWidth={0.1}
    />
    <rect
      x={5}
      y={2.897}
      width={16}
      height={20}
      rx={2}
      stroke="#B8B4E4"
      strokeWidth={0.1}
    />
    <rect
      x={3}
      y={4.897}
      width={20}
      height={16}
      rx={2}
      stroke="#B8B4E4"
      strokeWidth={0.1}
    />
    <circle cx={13} cy={12.877} r={10} stroke="#B8B4E4" strokeWidth={0.1} />
    <path
      stroke="#B8B4E4"
      strokeWidth={0.1}
      d="M13 2.876v20.001M9 2.876v20.001M3 12.877h20M3 8.876h20M3 16.877h20M17 2.876v20.001M23 2.876l-20 20M3 2.876l20 20"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.879 5.755A3 3 0 0 1 16 7.876v3h-6v-3a3 3 0 0 1 .879-2.12ZM8 10.877v-3a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1Zm9 2h2v8H7v-8h10Zm-6 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="#312B78"
    />
  </svg>
);

export default SvgLockMedium;
