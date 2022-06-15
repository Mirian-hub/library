import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFirstPageLarge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1.959a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-10Zm8.293-.666L5.296 6.29l-.003.003a.997.997 0 0 0 0 1.414l.003.003 4.997 4.997a1 1 0 1 0 1.414-1.414L7.414 7l4.293-4.293a1 1 0 0 0-1.414-1.414Z"
    />
  </svg>
);

export default SvgFirstPageLarge;
