import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFederatedIdentityLarge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4a3 3 0 0 0-1 5.83v3.296a3.997 3.997 0 0 0-1.9 1.119L9.959 12.5a3 3 0 1 0-.972 1.748l3.14 1.745a4.005 4.005 0 0 0 0 2.014l-3.14 1.745a3 3 0 1 0 .972 1.748l3.141-1.745c.508.535 1.163.93 1.9 1.119v3.297a3.001 3.001 0 1 0 2 0v-3.297a3.998 3.998 0 0 0 1.9-1.119L22.04 21.5a3 3 0 1 0 .972-1.748l-3.14-1.745a4.006 4.006 0 0 0 0-2.014l3.14-1.745a3 3 0 1 0-.972-1.748L18.9 14.245a3.997 3.997 0 0 0-1.9-1.119V9.829A3.001 3.001 0 0 0 16 4Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-9 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm18 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-8 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm18 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-9 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.176-18.236a1 1 0 0 1 1.36-.388l.9.5a1 1 0 1 1-.972 1.748l-.9-.5a1 1 0 0 1-.388-1.36ZM26 16.5a1 1 0 1 0-2 0v1a1 1 0 0 0 2 0v-1Zm-4.176 7.264a1 1 0 0 1-.388 1.36l-.9.5a1 1 0 1 1-.972-1.748l.9-.5a1 1 0 0 1 1.36.388Zm-10.288-.388a1 1 0 1 0-.972 1.748l.9.5a1 1 0 1 0 .972-1.748l-.9-.5ZM7 15.5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1Zm5.436-5.376a1 1 0 1 0-.972-1.748l-.9.5a1 1 0 1 0 .972 1.748l.9-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFederatedIdentityLarge;
