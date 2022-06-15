import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLk = ({
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
    <g clipPath="url(#LK_svg__a)">
      <path d="M.001 4.174H0v39.652h.001V4.174Z" fill="#FF9811" />
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <path
        d="M18.783 4.174h-8.31c-.368.252-.728.514-1.082.785L7.304 24l2.087 19.041c.354.271.714.533 1.082.785h8.31V4.174Z"
        fill="#FF9811"
      />
      <path
        d="M0 24c0 7.758 3.68 14.654 9.39 19.041V4.96C3.68 9.346 0 16.243 0 24Z"
        fill="#6DA544"
      />
      <path d="M38.609 14.631v.6l.022.004-.022-.604Z" fill="#FFDA44" />
      <path
        d="M46.087 30.26h-4.522l-1.913 2.088v4.174h-4.174v-2.087h2.087V30.26h-9.391v2.609h-2.087v-4.972a3.122 3.122 0 0 1-1.044-2.333V12a3.13 3.13 0 0 1 3.13-3.13v19.304h4.175l1.432-1.194a4.99 4.99 0 0 1-.389-1.936v-3.13h-3.13v-6.262h6.26c0-1.043 1.566-2.087 1.566-2.087s1.565 1.044 1.565 2.087v6.261c1.161.014 3.005-.016 4.998 0a6.33 6.33 0 0 1-.824-3.13c0-1.841.795-3.497 2.06-4.643a24.097 24.097 0 0 0-8.36-9.966H21.914v39.652h15.614a24.053 24.053 0 0 0 9.385-12.665l-.825-.9Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="LK_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLk;
