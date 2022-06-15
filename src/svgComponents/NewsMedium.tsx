import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNewsMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M16.65 5.042a1.005 1.005 0 0 1-.096-1.414l1.163-1.354a.995.995 0 0 1 1.407-.111c.415.36.459.993.097 1.414L18.057 4.93a.995.995 0 0 1-1.407.11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.135 15.844c-.827-.287-1.785-.595-2.54-.775-.53-.126-.961-.188-1.177-.133l-.009.002-4.151 1.138a4.926 4.926 0 0 1-6.08-3.51 5.06 5.06 0 0 1 3.549-6.15L9.878 5.28c.512-.14 1.797-1.54 2.784-2.69.537-.624 1.562-.408 1.77.385l3.048 11.632c.208.793-.574 1.504-1.345 1.238ZM4.106 12.037a2.953 2.953 0 0 0 3.636 2.107l-1.518-5.79a3.033 3.033 0 0 0-2.118 3.683Zm4.047-4.212 1.517 5.79 2.232-.611c.575-.158 1.16-.076 1.424-.035.361.055.755.146 1.132.246.207.054.42.115.637.179L12.96 5.243c-.156.166-.311.328-.464.481-.278.28-.574.56-.86.792-.193.157-.606.485-1.121.658v.004l-2.36.647Z"
      fill="currentColor"
    />
    <path
      d="M19.968 8.729c.533-.146.852-.697.712-1.232a.987.987 0 0 0-1.218-.703l-1.378.378c-.532.146-.85.697-.71 1.231a.987.987 0 0 0 1.218.703l1.377-.377ZM18.997 12.955a.995.995 0 0 1-.607-1.273 1.005 1.005 0 0 1 1.273-.624l1.67.578c.519.18.79.75.607 1.274a1.005 1.005 0 0 1-1.273.623l-1.67-.578ZM7.599 20.136l-.569-2.17 1.929-.529.569 2.17c.062.24.307.38.546.316a.454.454 0 0 0 .319-.553l-.569-2.17 1.929-.528.569 2.17a2.482 2.482 0 0 1-1.741 3.015 2.416 2.416 0 0 1-2.982-1.721Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNewsMedium;
