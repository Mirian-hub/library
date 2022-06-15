import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLogoutSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.333 2.917a.75.75 0 1 1 0 1.5H5.667a.25.25 0 0 0-.25.25v6.666c0 .138.112.25.25.25h3.666a.75.75 0 0 1 0 1.5H5.667a1.75 1.75 0 0 1-1.75-1.75V4.667c0-.967.783-1.75 1.75-1.75h3.666Zm-1 4.333a.75.75 0 0 0 0 1.5h3.856l-.72.72a.75.75 0 0 0 1.061 1.06l1.991-1.99a.748.748 0 0 0 0-1.08l-1.99-1.99a.75.75 0 1 0-1.061 1.06l.72.72H8.332Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLogoutSmall;
