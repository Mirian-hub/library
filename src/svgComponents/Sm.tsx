import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSm = ({
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
      d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24c1.043 0 24-3.13 24-3.13L48 24Z"
      fill="#338AF3"
    />
    <path d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24" fill="#F0F0F0" />
    <path
      d="M33.526 16.56 24 26.087l-9.527-9.527a11.411 11.411 0 0 0-1.952 6.396v3.13c0 5.027 3.248 9.31 7.756 10.859a3.471 3.471 0 0 0 .381 3.75l3.411-2.733 3.411 2.733a3.472 3.472 0 0 0 .36-3.792c4.446-1.583 7.638-5.834 7.638-10.816v-3.13c0-2.367-.72-4.568-1.952-6.397Z"
      fill="#6DA544"
    />
    <path
      d="M24 34.435c-4.603 0-8.348-3.745-8.348-8.348v-3.13c0-4.604 3.745-8.348 8.348-8.348 4.603 0 8.348 3.745 8.348 8.347v3.131c0 4.603-3.745 8.348-8.348 8.348Z"
      fill="#FFDA44"
    />
    <path
      d="M29.218 26.087v-3.13A5.223 5.223 0 0 0 24 17.739a5.223 5.223 0 0 0-5.217 5.218v3.13L24 27.13l5.218-1.043Z"
      fill="#338AF3"
    />
    <path
      d="M18.783 26.087A5.223 5.223 0 0 0 24 31.304a5.223 5.223 0 0 0 5.218-5.217H18.783Z"
      fill="#6DA544"
    />
    <path
      d="M30.26 14.609a3.13 3.13 0 0 0-5.217-2.333v-1.841h1.043V8.348h-1.043V7.304h-2.087v1.044h-1.043v2.087h1.043v1.841a3.13 3.13 0 0 0-4.174 4.665v1.842h10.435V16.94a3.122 3.122 0 0 0 1.043-2.332Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgSm;
