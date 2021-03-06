import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNu = ({
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
      fill="#FFDA44"
    />
    <path
      d="M24 11.478v8.095l-8.348-8.095H24ZM12.521 24h7.051l-7.051-9.391-1.044 7.304L12.521 24Z"
      fill="#0052B4"
    />
    <path
      d="M23.936 24h.065v-.064l-.065.064ZM24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z"
      fill="#F0F0F0"
    />
    <path d="m24 21.049-8.526-8.527h-2.951L24 24v-2.951Z" fill="#D80027" />
    <path
      d="M12.143 3.13a24.056 24.056 0 0 0-2.655 1.755h.985L7.87 6.777l.994 3.06L6.26 7.944l-.277.202a24.074 24.074 0 0 0-2.853 3.995V24h6.26V9.391h14.61v-6.26H12.141Z"
      fill="#D80027"
    />
    <path
      d="M10.253 4.327a24.03 24.03 0 0 0-.765.558L7.87 6.777 6.261 7.945l-.28.203c-.588.67-1.141 1.372-1.654 2.104a4.435 4.435 0 0 0 5.926-5.926Z"
      fill="#0052B4"
    />
    <path
      d="m5.98 8.148.28-.203 2.602 1.891-.994-3.06 2.602-1.89h-.985A24.151 24.151 0 0 0 5.98 8.147ZM16.587 4.174l.518 1.594h1.676l-1.356.986.518 1.594-1.356-.986-1.356.986.518-1.594-1.356-.986h1.676l.518-1.594ZM6.26 14.609l.518 1.594h1.676l-1.356.986.518 1.594-1.356-.986-1.356.986.517-1.595-1.356-.985h1.677l.518-1.594Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgNu;
