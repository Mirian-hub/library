import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBadgeMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.166 3.375a1.2 1.2 0 0 1 1.668 0l.993.96 1.368-.193a1.2 1.2 0 0 1 1.35.98l.239 1.361 1.22.648a1.2 1.2 0 0 1 .516 1.587l-.607 1.24.607 1.242a1.2 1.2 0 0 1-.516 1.587l-1.22.647-.239 1.361a1.2 1.2 0 0 1-1.35.981l-1.368-.194-.993.961a1.2 1.2 0 0 1-1.668 0l-.993-.96-1.368.193a1.2 1.2 0 0 1-1.35-.98l-.239-1.361-1.22-.648A1.2 1.2 0 0 1 5.48 11.2l.607-1.241-.607-1.241a1.2 1.2 0 0 1 .516-1.587l1.22-.648.239-1.36a1.2 1.2 0 0 1 1.35-.981l1.368.193.993-.96ZM12 12.459a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-5 7.406v-5.004c.549.439 1.253.69 2 .672v3.239l2.019-1.746a1.5 1.5 0 0 1 1.962 0L15 20.272v-3.239a3.09 3.09 0 0 0 2-.672v5.005c0 1.284-1.51 1.974-2.481 1.134l-2.52-2.178L9.482 22.5C8.509 23.34 7 22.65 7 21.365Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBadgeMedium;
