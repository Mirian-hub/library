import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMyAccountLarge = ({
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
      d="M22.997 25.488A10.955 10.955 0 0 1 16 28a10.963 10.963 0 0 1-7.588-3.036A10.969 10.969 0 0 1 5 17C5 10.925 9.925 6 16 6s11 4.925 11 11a10.969 10.969 0 0 1-4.003 8.488ZM29 17c0 7.18-5.82 13-13 13S3 24.18 3 17 8.82 4 16 4s13 5.82 13 13Zm-18.667 6.919v.074a9.05 9.05 0 0 1-1.758-1.905 5.526 5.526 0 0 1 2.074-2.99l.05-.037.136-.095a7.129 7.129 0 0 1 1.648-.826l-.019-.02A4.987 4.987 0 0 1 11 14.586a5 5 0 1 1 8.517 3.555c.053.018.105.038.158.058a6.957 6.957 0 0 1 1.676.9 5.526 5.526 0 0 1 2.074 2.99 9.052 9.052 0 0 1-1.759 1.905v-.074c0-1.532-.6-2.56-1.538-3.238-.98-.71-2.417-1.096-4.128-1.096-1.71 0-3.147.387-4.128 1.096-.937.679-1.539 1.706-1.539 3.238ZM16 11.585a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMyAccountLarge;
