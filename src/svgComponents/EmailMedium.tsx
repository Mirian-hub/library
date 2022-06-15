import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmailMedium = ({
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
      d="M4 4.959a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2H4Zm15.964 2H20V7l-.036-.041Zm-1.436 0H5.472L12 12.67l6.528-5.712Zm-14.492 0H4V7l.036-.041ZM4 8.329v10.63h16V8.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 8.329Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEmailMedium;
