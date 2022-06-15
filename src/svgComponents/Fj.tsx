import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFj = ({
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
      fill="#338AF3"
    />
    <path
      d="M24 11.478v8.095l-8.348-8.095H24ZM12.522 24h7.051l-7.05-9.391-1.044 7.304L12.522 24Z"
      fill="#0052B4"
    />
    <path d="M23.935 24H24v-.064a19.43 19.43 0 0 1-.065.064Z" fill="#F0F0F0" />
    <path
      d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z"
      fill="#F0F0F0"
    />
    <path
      d="M12.142 3.13a24.115 24.115 0 0 0-9.011 9.012V24h6.26V9.392h14.61V3.13H12.141Z"
      fill="#D80027"
    />
    <path d="m24 21.049-8.526-8.527h-2.952L24 24v-2.951Z" fill="#D80027" />
    <path
      d="M27.13 15.652V24c0 5.591 7.305 7.304 7.305 7.304S41.74 29.591 41.74 24v-8.348l-7.304-2.087-7.304 2.087Z"
      fill="#F3F3F3"
    />
    <path
      d="M41.74 15.652v-3.13H27.13v3.13h6.262v6.261H27.13V24h6.26v6.984c.63.223 1.044.32 1.044.32s.414-.097 1.043-.32V24h6.261v-2.087h-6.26v-6.26h6.26Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgFj;
