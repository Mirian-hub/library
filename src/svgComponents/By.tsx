import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBy = ({
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
    <g clipPath="url(#BY_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FCFCFC"
      />
      <path
        d="m9.913 22.26-2.609-4.732 2.609-4.658 2.609 4.658-2.61 4.733ZM4.696 22.26l-2.609-4.732 2.609-4.658 2.608 4.658-2.608 4.733ZM9.913 35.13l-2.609-4.732 2.609-4.659 2.609 4.659-2.61 4.732ZM4.696 35.13l-2.609-4.732 2.609-4.659 2.608 4.659-2.608 4.732ZM12.522 4.659l-.739-1.32a24.065 24.065 0 0 0-3.712 2.71l1.842 3.342 2.609-4.732ZM9.913 38.609l-1.861 3.324a24.066 24.066 0 0 0 3.71 2.714l.76-1.38-2.609-4.658Z"
        fill="#A2001D"
      />
      <path
        d="M14.609 30.26v15.832A23.92 23.92 0 0 0 24 48c10.32 0 19.116-6.513 22.507-15.652L14.61 30.26Z"
        fill="#6DA544"
      />
      <path
        d="M46.507 32.348A23.946 23.946 0 0 0 48 24C48 10.745 37.255 0 24 0c-3.333 0-6.507.68-9.391 1.908v30.44h31.898Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="BY_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBy;
