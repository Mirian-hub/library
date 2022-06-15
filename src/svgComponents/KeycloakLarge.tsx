import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKeycloakLarge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 13a6 6 0 1 1 6 6c-.727 0-1.447-.168-2.143-.434l-.605-.232-.46.459L14.587 21H12a1 1 0 0 0-1 1v2H9a1 1 0 0 0-1 1v2H6v-2.586l8.207-8.207.467-.466-.246-.613C14.146 14.424 14 13.775 14 13Zm6-8a8 8 0 0 0-8 8c0 .818.123 1.54.345 2.24l-8.052 8.053A1 1 0 0 0 4 24v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l2.059-2.058A7.627 7.627 0 0 0 20 21a8 8 0 1 0 0-16Zm2 8a2 2 0 0 0-2.697-1.875l2.572 2.572c.08-.216.125-.45.125-.697Zm-2-4a4 4 0 0 1 3.46 6.008 1.68 1.68 0 0 1-1.435.841 1.94 1.94 0 0 1-1.401-.575l-2.898-2.898a1.94 1.94 0 0 1-.575-1.4 1.68 1.68 0 0 1 .84-1.436A3.986 3.986 0 0 1 20 9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgKeycloakLarge;
