import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNetworkMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2-4a4 4 0 0 0-3.99 4.276l-4.652 1.55A3.998 3.998 0 0 0 6 6a4 4 0 1 0 3.99 3.724l4.652-1.55a4.021 4.021 0 0 0 1.184 1.184l-1.55 4.651a3.982 3.982 0 0 0-2.308.544l-2.522-2.521a4.02 4.02 0 0 1-1.414 1.414l2.522 2.522a4 4 0 1 0 5.62-1.326l1.55-4.651A4 4 0 1 0 18 2ZM6 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNetworkMedium;
