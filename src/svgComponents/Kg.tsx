import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKg = ({
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
      d="m35.737 24-4.795 2.256 2.553 4.645-5.208-.997-.66 5.261L24 31.296l-3.627 3.87-.66-5.262-5.208.997 2.554-4.645L12.263 24l4.796-2.256-2.554-4.645 5.208.997.66-5.261L24 16.704l3.628-3.87.66 5.262 5.208-.997-2.554 4.645L35.737 24Z"
      fill="#FFDA44"
    />
    <path
      d="M24 31.304a7.304 7.304 0 1 0 0-14.608 7.304 7.304 0 0 0 0 14.608Z"
      fill="#D80027"
    />
    <path
      d="M20.348 24c-.176 0-.35.009-.522.026a4.156 4.156 0 0 0 .977 2.657 7.32 7.32 0 0 1 1.411-2.336A5.19 5.19 0 0 0 20.348 24ZM22.596 27.931a4.163 4.163 0 0 0 2.808 0A5.22 5.22 0 0 0 24 25.496a5.218 5.218 0 0 0-1.404 2.435ZM27.614 21.914a4.172 4.172 0 0 0-7.229 0 7.256 7.256 0 0 1 3.615.982 7.256 7.256 0 0 1 3.614-.982ZM25.785 24.347a7.319 7.319 0 0 1 1.411 2.336c.605-.72.97-1.645.977-2.657a5.22 5.22 0 0 0-2.388.32Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgKg;
