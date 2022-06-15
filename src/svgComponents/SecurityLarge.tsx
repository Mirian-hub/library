import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSecurityLarge = ({
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
      d="M15.984 6.17a.032.032 0 0 1 .032 0c3.93 2.276 8.289 3.93 9.952 4.528-.192 2.758-1.485 12.2-9.968 17.076-8.484-4.877-9.776-14.318-9.968-17.076 1.663-.597 6.022-2.252 9.952-4.528Zm1.034-1.73a2.032 2.032 0 0 0-2.036 0c-3.786 2.192-8.027 3.802-9.643 4.382-.784.281-1.368 1.04-1.306 1.957.187 2.807 1.5 13.303 10.995 18.744a1.96 1.96 0 0 0 1.943 0c9.495-5.441 10.81-15.937 10.996-18.744.062-.917-.522-1.676-1.306-1.957-1.616-.58-5.857-2.19-9.643-4.383Zm4.69 10.226a1 1 0 0 0-1.415-1.414L15 18.545l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSecurityLarge;
