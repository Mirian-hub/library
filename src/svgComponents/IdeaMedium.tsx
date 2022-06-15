import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIdeaMedium = ({
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
      d="M12 5.5a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 15.041v-1.376a6.5 6.5 0 1 0-8 0v1.376a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1Zm-1.232-2.952-.768.6v1.352h-4V12.69l-.768-.6a4.5 4.5 0 1 1 5.536 0Z"
      fill="currentColor"
    />
    <path
      d="M10 20.041a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4ZM8 18.041a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIdeaMedium;
