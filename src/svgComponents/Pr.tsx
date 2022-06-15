import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPr = ({
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
    <g clipPath="url(#PR_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C16.148 0 9.177 3.77 4.799 9.6H43.2C38.822 3.77 31.85 0 24 0ZM24 48c7.851 0 14.822-3.77 19.2-9.6H4.8c4.378 5.83 11.349 9.6 19.2 9.6ZM0 24c0 1.644.166 3.249.48 4.8h47.04c.314-1.551.48-3.156.48-4.8a24.11 24.11 0 0 0-.48-4.8H.48A24.102 24.102 0 0 0 0 24Z"
        fill="#D80027"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#0052B4"
      />
      <path
        d="m9.714 17.739 1.554 4.783h5.029l-4.069 2.956 1.554 4.783-4.068-2.956-4.069 2.956L7.2 25.478l-4.068-2.956H8.16l1.554-4.783Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="PR_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPr;
