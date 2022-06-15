import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUpLogoShape = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m8.855 1.964 16.894 11.905v3.462l-9.047 12.844-.371.123-9.833-6.93-4.094-12.24 6.45-9.164ZM8.535.087l-.779 1.106-6.458 9.163-.392.553.218.647 4.102 12.24.138.415.363.255 9.833 6.93.56.393.647-.218.371-.124.422-.138.255-.364 9.04-12.836.247-.349v-4.59l-.575-.4L9.633.866 8.535.087Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUpLogoShape;
