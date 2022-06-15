import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTc = ({
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
    <path d="M23.934 24H24v-.064a19.43 19.43 0 0 1-.064.064Z" fill="#F0F0F0" />
    <path
      d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z"
      fill="#F0F0F0"
    />
    <path
      d="M12.142 3.13a24.114 24.114 0 0 0-9.011 9.012V24h6.26V9.392h14.61V3.13H12.141Z"
      fill="#D80027"
    />
    <path d="m23.999 21.049-8.527-8.527H12.52L24 24v-2.951Z" fill="#D80027" />
    <path
      d="M27.13 12.522V24c0 5.591 7.305 7.304 7.305 7.304S41.74 29.591 41.74 24V12.522H27.131Z"
      fill="#FFDA44"
    />
    <path
      d="M33.391 16.696c0 1.152-.934 4.173-2.087 4.173s-2.087-3.02-2.087-4.173 2.087-2.087 2.087-2.087 2.087.934 2.087 2.087Z"
      fill="#FF9811"
    />
    <path
      d="M38.928 18.969c.336-.822.598-2.023.598-2.621 0-.96-1.252-1.74-1.252-1.74s-1.252.78-1.252 1.74c0 .598.262 1.799.599 2.62l-.723 1.633a3.646 3.646 0 0 0 2.752 0l-.722-1.632Z"
      fill="#A2001D"
    />
    <path
      d="M32.868 24s-1.043 2.087-1.043 4.174h5.217C37.042 26.087 36 24 36 24l-1.566-1.044L32.868 24Z"
      fill="#6DA544"
    />
    <path
      d="M35.999 24v-.522a1.565 1.565 0 0 0-3.13 0V24h3.13Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgTc;
