import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNz = ({
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
    <path
      d="M23.936 24h.065v-.064l-.065.064ZM24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z"
      fill="#F0F0F0"
    />
    <path
      d="M12.143 3.13a24.115 24.115 0 0 0-9.012 9.012V24h6.26V9.391h14.61v-6.26H12.141Z"
      fill="#D80027"
    />
    <path
      d="m24 21.049-8.527-8.527H12.52L24 24v-2.951ZM41.563 17.809l.518 1.594h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.518-1.594-1.356-.985h1.676l.519-1.594ZM35.57 29.287l.777 2.391h2.514l-2.034 1.478.777 2.392-2.034-1.478-2.035 1.478.778-2.392-2.035-1.478h2.515l.777-2.391ZM35.796 10.504l.648 1.993h2.095l-1.695 1.232.647 1.993-1.695-1.232-1.695 1.232.647-1.993-1.695-1.232h2.096l.647-1.993ZM30.031 17.74l.777 2.39h2.515l-2.035 1.479.778 2.391-2.035-1.478L27.997 24l.777-2.391-2.034-1.478h2.514l.777-2.392Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgNz;
