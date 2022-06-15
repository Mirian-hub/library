import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChangePhotoMedium = ({
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
      d="m8.193 2.81 1 1a.667.667 0 0 0 .947 0 .666.666 0 0 0 .087-.807h2.44a.667.667 0 1 0 0-1.333h-2.44a.666.666 0 0 0-.087-.806.668.668 0 0 0-.947 0l-1 1a.666.666 0 0 0-.14.22.666.666 0 0 0 0 .506c.032.082.08.157.14.22Zm7.087 2.606a.668.668 0 0 0-.14-.22l-1-1a.668.668 0 0 0-.947 0 .666.666 0 0 0-.086.807h-2.44a.667.667 0 1 0 0 1.333h2.44a.667.667 0 0 0 .086.806.667.667 0 0 0 .947 0l1-1a.668.668 0 0 0 .14-.22.667.667 0 0 0 0-.506Zm-7.947.586a2.667 2.667 0 0 0-1.885 4.551 2.667 2.667 0 0 0 3.77-3.77c-.5-.5-1.177-.78-1.885-.78Zm0 4a1.334 1.334 0 1 1 0-2.668 1.334 1.334 0 0 1 0 2.667Zm6-2a.667.667 0 0 0-.666.666v3.333a.666.666 0 0 1-.667.666H2.667A.667.667 0 0 1 2 12.001V6.669a.666.666 0 0 1 .667-.667H4a.667.667 0 0 0 .667-.46l.36-1.08a.666.666 0 0 1 .6-.46h1.04a.667.667 0 1 0 0-1.332h-1.04a2 2 0 0 0-1.9 1.373l-.207.626h-.853a2 2 0 0 0-2 2V12a2 2 0 0 0 2 1.999H12a2 2 0 0 0 2-2V8.669a.667.667 0 0 0-.667-.666Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChangePhotoMedium;
