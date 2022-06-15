import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocCenterLarge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3a2 2 0 0 0-2 2v7a1 1 0 1 0 2 0V5h11v1.5A1.5 1.5 0 0 0 19.5 8H27v3H14.229a1 1 0 1 0 0 2H27v4a1 1 0 0 0 2 0V8a2 2 0 0 0-2-2h-7V5a2 2 0 0 0-2-2H7Zm2.924 11.31a1 1 0 0 0-1.413-.034L4.316 18.27a.997.997 0 0 0 0 1.458l4.195 3.995a1 1 0 1 0 1.379-1.448L7.5 20H19a1 1 0 1 0 0-2H7.5l2.39-2.276a1 1 0 0 0 .034-1.414Zm13.566 4.966a1 1 0 1 0-1.38 1.448L24.5 23H13a1 1 0 0 0 0 2h11.5l-2.39 2.276a1 1 0 1 0 1.38 1.448l4.188-3.99a.997.997 0 0 0 0-1.47l-4.189-3.988Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDocCenterLarge;
