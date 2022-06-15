import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHomeLarge = ({
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
      d="M16.682 3.269a1 1 0 0 0-1.364 0l-10 9.333a1 1 0 0 0-.318.731v12a3.76 3.76 0 0 0 1.003 2.57A3.423 3.423 0 0 0 8.5 29h15c.95 0 1.847-.403 2.497-1.097A3.76 3.76 0 0 0 27 25.333v-12a1 1 0 0 0-.318-.73l-10-9.334ZM21 27h2.5c.376 0 .751-.159 1.038-.465.29-.308.462-.74.462-1.202V13.768l-9-8.4-9 8.4v11.565c0 .462.173.894.462 1.202.287.306.662.465 1.038.465H11v-9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v9Zm-8 0v-8h6v8h-6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHomeLarge;
