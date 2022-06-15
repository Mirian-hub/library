import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBm = ({
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
      fill="#D80027"
    />
    <path
      d="M24 11.478v8.095l-8.348-8.095H24ZM12.522 24h7.05l-7.05-9.391-1.044 7.304L12.522 24Z"
      fill="#0052B4"
    />
    <path d="M23.936 24H24v-.064l-.064.064Z" fill="#F0F0F0" />
    <path
      d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z"
      fill="#F0F0F0"
    />
    <path
      d="M12.142 3.13a24.114 24.114 0 0 0-9.012 9.012v12.902h6.261V9.392h15.652V3.13H12.142Z"
      fill="#D80027"
    />
    <path
      d="m24.954 22.003-9.481-9.481H12.52l12.433 12.432v-2.951Z"
      fill="#D80027"
    />
    <path
      d="M27.13 12.522V24c0 5.591 14.609 5.591 14.609 0V12.522H27.13Z"
      fill="#F3F3F3"
    />
    <path
      d="M27.13 24c0 5.591 7.305 7.304 7.305 7.304s7.304-1.713 7.304-7.304H27.13Z"
      fill="#6DA544"
    />
    <path
      d="m34.435 19.409-3.392 1.46V24l3.392 2.087L37.826 24v-3.13l-3.391-1.461Z"
      fill="#A2001D"
    />
    <path d="M37.826 17.74h-6.782v3.13h6.782v-3.13Z" fill="#338AF3" />
  </svg>
);

export default SvgBm;
