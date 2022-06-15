import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBz = ({
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
      d="M48 24c0-8.237-4.15-15.504-10.473-19.826L24 3.13 10.473 4.174C4.15 8.496 0 15.764 0 24c0 8.237 4.15 15.504 10.473 19.826L24 44.87l13.527-1.044C43.85 39.504 48 32.237 48 24Z"
      fill="#0052B4"
    />
    <path
      d="M37.527 4.174A23.887 23.887 0 0 0 24 0c-5.018 0-9.675 1.54-13.527 4.174h27.054ZM10.473 43.826A23.886 23.886 0 0 0 24 48c5.018 0 9.675-1.54 13.527-4.174H10.473Z"
      fill="#A2001D"
    />
    <path
      d="M24 35.478c6.34 0 11.478-5.139 11.478-11.478 0-6.34-5.139-11.478-11.478-11.478-6.34 0-11.478 5.139-11.478 11.478 0 6.34 5.139 11.478 11.478 11.478Z"
      fill="#F0F0F0"
    />
    <path
      d="M24 33.391a9.391 9.391 0 1 0 0-18.783 9.391 9.391 0 0 0 0 18.783Z"
      fill="#6DA544"
    />
    <path
      d="M24 30.26a6.26 6.26 0 1 0 0-12.52 6.26 6.26 0 0 0 0 12.52Z"
      fill="#F0F0F0"
    />
    <path
      d="M24 22.435 20.61 24v2.609L24 28.696l3.391-2.087V24l-3.39-1.565Z"
      fill="#0052B4"
    />
    <path d="M27.391 20.87H20.61V24h6.782v-3.13Z" fill="#FFDA44" />
  </svg>
);

export default SvgBz;
