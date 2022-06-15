import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSettingsLarge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.757a1 1 0 0 0 1.707.707l1.95-1.95a1 1 0 0 1 1.414 0l.707-.706-.707.707 1.414 1.414a1 1 0 0 1 0 1.414l-1.95 1.95A1 1 0 0 0 23.243 14H26a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2.757a1 1 0 0 0-.707 1.707l1.95 1.95a1 1 0 0 1 0 1.414l-1.415 1.414a1 1 0 0 1-1.414 0l-1.95-1.95a1 1 0 0 0-1.707.708V26a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.757a1 1 0 0 0-1.707-.707l-1.95 1.95.707.706-.707-.707a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414l1.95-1.95A1 1 0 0 0 8.756 18H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.757a1 1 0 0 0 .707-1.707l-1.95-1.95a1 1 0 0 1 0-1.414L8.93 7.515a1 1 0 0 1 1.414 0l1.95 1.95A1 1 0 0 0 14 8.756V6Zm1-3a3 3 0 0 0-3 3v.343l-.243-.242a3 3 0 0 0-4.242 0L6.1 7.515a3 3 0 0 0 0 4.242l.242.243H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.343l-.242.243a3 3 0 0 0 0 4.242L7.514 25.9a3 3 0 0 0 4.242 0l.243-.243V26a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-.343l.243.242a3 3 0 0 0 4.242 0l1.415-1.414a3 3 0 0 0 0-4.242L25.657 20H26a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-.343l.242-.243a3 3 0 0 0 0-4.242l-.707.707.707-.707L24.485 6.1a3 3 0 0 0-4.242 0L20 6.343V6a3 3 0 0 0-3-3h-2Zm-2 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-2 0a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSettingsLarge;
