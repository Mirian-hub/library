import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMoveToMedium = ({
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
      d="M2 6.959a2 2 0 0 1 2-2h4a1 1 0 0 1 .707.293l1.707 1.707H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.716l.837-.838c.339-.338.58-.737.722-1.162H20v-10H10a1 1 0 0 1-.707-.293L7.586 6.959H4v4.212a3.013 3.013 0 0 0-2 0V6.959Zm.293 6.334a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L5.586 18l-3.293-3.293a1 1 0 0 1 0-1.414Zm5 1.414a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L10.586 18l-3.293-3.293Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMoveToMedium;
