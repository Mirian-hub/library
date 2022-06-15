import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgProductCatalogMedium = ({
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
    <path d="M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.775l4.602-5.037a1 1 0 0 1 1.413-.064l4.43 4.047a1 1 0 0 1 .063 1.413L16.063 15H21.2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm2 17V5h4v16H4Zm6.581 0h9.62v-4h-5.966l-3.654 4ZM10 18.67v-5.93l5.404-5.915 2.953 2.698L10 18.671Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgProductCatalogMedium;
