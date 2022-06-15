import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCompanySmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.167 2.027a1 1 0 0 0-1 1v10.334H2a.667.667 0 1 0 0 1.333h12a.667.667 0 0 0 0-1.333h-1.167V3.027a1 1 0 0 0-1-1H4.167ZM11.5 13.361v-10h-7v10h4v-3.2c0-.074.06-.134.133-.134h1.734c.073 0 .133.06.133.134v3.2h1ZM5.633 4.027a.133.133 0 0 0-.133.134v1.733c0 .074.06.133.133.133h1.734c.073 0 .133-.06.133-.133V4.161a.133.133 0 0 0-.133-.134H5.633ZM5.5 7.133c0-.073.06-.133.133-.133h1.734c.073 0 .133.06.133.133v1.734c0 .073-.06.133-.133.133H5.633a.133.133 0 0 1-.133-.133V7.133Zm.133 2.894a.133.133 0 0 0-.133.134v1.733c0 .074.06.133.133.133h1.734c.073 0 .133-.06.133-.133v-1.733a.133.133 0 0 0-.133-.134H5.633Zm3-6a.133.133 0 0 0-.133.134v1.733c0 .074.06.133.133.133h1.734c.073 0 .133-.06.133-.133V4.161a.133.133 0 0 0-.133-.134H8.633ZM8.5 7.133c0-.073.06-.133.133-.133h1.734c.073 0 .133.06.133.133v1.734c0 .073-.06.133-.133.133H8.633a.133.133 0 0 1-.133-.133V7.133Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCompanySmall;
