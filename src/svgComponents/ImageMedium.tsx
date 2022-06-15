import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImageMedium = ({
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
      d="M2 6.959a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-12Zm18 0H4v12h16v-12Zm-10.038 2a1 1 0 0 1 .896.485l2.34 3.902 1.095-1.094a1 1 0 0 1 1.488.082l2 2.5a1 1 0 1 1-1.562 1.25l-1.302-1.628-1.21 1.21a1 1 0 0 1-1.565-.193l-2.062-3.438-2.186 4.371a1 1 0 1 1-1.788-.894l3-6a1 1 0 0 1 .856-.552Zm7.038 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgImageMedium;
