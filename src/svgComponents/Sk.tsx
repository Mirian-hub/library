import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSk = ({
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
    <g clipPath="url(#SK_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 48c13.255 0 24-10.745 24-24 0-2.936-.528-5.748-1.493-8.348H1.493A23.948 23.948 0 0 0 0 24c0 13.255 10.745 24 24 24Z"
        fill="#0052B4"
      />
      <path
        d="M24 48c10.318 0 19.115-6.513 22.507-15.652H1.492C4.883 41.487 13.68 48 23.999 48Z"
        fill="#D80027"
      />
      <path
        d="M6.207 13.565v11.973c0 6.81 8.897 8.897 8.897 8.897S24 32.348 24 25.538V13.565H6.207Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.293 13.565v11.973c0 .8.178 1.554.53 2.262h12.56a5.02 5.02 0 0 0 .53-2.262V13.565H8.293Z"
        fill="#D80027"
      />
      <path
        d="M19.278 21.913h-3.13v-2.087h2.086V17.74h-2.087v-2.087H14.06v2.087h-2.087v2.087h2.087v2.087h-3.13V24h3.13v2.087h2.087V24h3.13v-2.087Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.67 30.713c1.345.846 2.726 1.336 3.434 1.555.707-.219 2.089-.71 3.433-1.555 1.357-.852 2.307-1.827 2.847-2.913a3.635 3.635 0 0 0-2.937-.573 3.652 3.652 0 0 0-6.687 0 3.635 3.635 0 0 0-2.937.574c.54 1.085 1.49 2.06 2.847 2.912Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="SK_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSk;
