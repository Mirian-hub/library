import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHk = ({
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
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#D80027"
    />
    <path
      d="M26.478 18.156c-.545 2.269-1.514 1.836-1.99 3.815a5.217 5.217 0 0 1 2.44-10.146c-.952 3.957.038 4.302-.45 6.331ZM19.209 19.837c1.989 1.22 1.278 2.008 3.012 3.072a5.218 5.218 0 0 1-8.895-5.455c3.469 2.128 4.103 1.293 5.883 2.383ZM18.56 27.271c1.775-1.515 2.305-.595 3.853-1.916a5.217 5.217 0 0 1-7.937 6.774c3.095-2.642 2.497-3.503 4.084-4.858ZM25.43 30.184c-.892-2.156.146-2.376-.632-4.256a5.217 5.217 0 1 1 3.99 9.642c-1.555-3.76-2.56-3.457-3.358-5.386ZM30.324 24.55c-2.326.183-2.215-.872-4.243-.713a5.218 5.218 0 0 1 10.403-.816c-4.057.318-4.08 1.367-6.16 1.53Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgHk;
