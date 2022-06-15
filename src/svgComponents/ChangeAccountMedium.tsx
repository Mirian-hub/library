import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChangeAccountMedium = ({
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
      d="M5.138 2.862c.26.26.26.682 0 .943L2.471 6.47a.667.667 0 1 1-.942-.942l2.666-2.667c.26-.26.683-.26.943 0ZM14.472 10.471a.667.667 0 0 1-.943 0l-2.667-2.666a.667.667 0 1 1 .943-.943l2.667 2.667c.26.26.26.682 0 .942Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.138 9.138a.667.667 0 0 1-.943 0L1.53 6.471a.667.667 0 1 1 .943-.942l2.666 2.666c.26.26.26.683 0 .943ZM10.862 13.138a.667.667 0 0 1 0-.943L13.53 9.53a.667.667 0 1 1 .943.942l-2.667 2.667a.667.667 0 0 1-.943 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 5.973a.667.667 0 0 1-.667.666H2a.667.667 0 0 1 0-1.333h5.333c.369 0 .667.298.667.667ZM14.667 10a.667.667 0 0 1-.667.667H8.667a.667.667 0 0 1 0-1.334H14c.368 0 .667.299.667.667Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChangeAccountMedium;
