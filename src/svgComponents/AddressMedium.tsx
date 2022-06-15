import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAddressMedium = ({
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
      d="M6 10.882c0-3.26 2.676-5.923 6-5.923s6 2.662 6 5.923c0 .653-.295 1.567-.868 2.669-.558 1.074-1.322 2.218-2.126 3.298A51.12 51.12 0 0 1 12 20.489a51.114 51.114 0 0 1-3.006-3.64c-.804-1.08-1.568-2.224-2.126-3.298C6.295 12.449 6 11.535 6 10.882Zm6-7.923c-4.408 0-8 3.537-8 7.923 0 1.146.48 2.412 1.093 3.591.627 1.206 1.46 2.445 2.297 3.57a53.602 53.602 0 0 0 3.815 4.532 1.094 1.094 0 0 0 1.59 0 53.608 53.608 0 0 0 3.815-4.532c.838-1.125 1.67-2.364 2.297-3.57.613-1.18 1.093-2.445 1.093-3.591 0-4.386-3.592-7.923-8-7.923Zm-2 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAddressMedium;
