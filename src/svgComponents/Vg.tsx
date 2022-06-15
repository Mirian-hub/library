import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVg = ({
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
      d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24C0 24.006 24 .003 24 0c13.255 0 24 10.745 24 24Z"
      fill="#0052B4"
    />
    <path d="M23.936 24H24v-.064l-.064.064Z" fill="#F0F0F0" />
    <path
      d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z"
      fill="#F0F0F0"
    />
    <path
      d="M12.142 3.13a24.114 24.114 0 0 0-9.012 9.012V24h6.261V9.392H24V3.13H12.142Z"
      fill="#D80027"
    />
    <path
      d="m34.435 24-6.487 6.487a7.302 7.302 0 0 0 12.974 0L34.434 24Z"
      fill="#FFDA44"
    />
    <path d="m24 21.049-8.527-8.527h-2.951L24 24v-2.951Z" fill="#D80027" />
    <path
      d="M27.13 12.522V24c0 5.591 7.305 7.304 7.305 7.304s7.304-1.713 7.304-7.304V12.522H27.13Z"
      fill="#6DA544"
    />
    <path d="M36 17.74h-3.13v8.347H36v-8.348Z" fill="#F0F0F0" />
    <path
      d="M34.435 19.304a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z"
      fill="#A2001D"
    />
    <path
      d="M31.304 14.609h-2.087v2.087h2.087v-2.087ZM31.304 19.304h-2.087v2.087h2.087v-2.087ZM31.304 24h-2.087v2.087h2.087V24ZM39.652 14.609h-2.087v2.087h2.087v-2.087ZM39.652 19.304h-2.087v2.087h2.087v-2.087ZM39.652 24h-2.087v2.087h2.087V24Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgVg;
