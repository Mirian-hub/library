import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMa = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#D80027"
    />
    <path
      d="M38.182 19.696H27.347L24 9.391l-3.348 10.305H9.816l8.766 6.369-3.349 10.305L24 30l8.766 6.37-3.348-10.305 8.765-6.369Zm-17.147 5.571 1.132-3.484h3.664l1.132 3.484L24 27.421l-2.964-2.154Zm4.118-5.571h-2.308L24 16.145l1.154 3.551Zm3.585 4.282-.713-2.195h3.734l-3.02 2.195Zm-8.765-2.195-.713 2.195-3.021-2.195h3.734Zm-.77 9.123 1.154-3.551 1.867 1.356-3.021 2.195Zm6.571-2.195 1.867-1.356 1.154 3.55-3.02-2.194Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgMa;
