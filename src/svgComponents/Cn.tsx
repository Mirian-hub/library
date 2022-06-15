import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCn = ({
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
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#D80027"
    />
    <path
      d="m13.134 14.606 2.072 6.375h6.703l-5.418 3.947 2.072 6.375-5.429-3.937-5.428 3.937 2.081-6.375-5.428-3.947h6.704l2.071-6.375ZM28.453 37.172l-1.584-1.95-2.344.91 1.36-2.11-1.585-1.96 2.428.647 1.369-2.109.13 2.512 2.438.647-2.353.9.14 2.513ZM31.603 31.453l.75-2.4L30.3 27.6l2.512-.038.741-2.4.816 2.382 2.512-.028-2.016 1.5.807 2.38-2.053-1.452-2.016 1.51ZM35.85 17.616l-1.106 2.259 1.8 1.753-2.484-.356-1.107 2.25-.431-2.475-2.494-.356 2.232-1.172-.432-2.485 1.8 1.753 2.222-1.171ZM28.519 10.772l-.188 2.503 2.335.947-2.447.6-.178 2.512-1.322-2.137-2.447.6 1.622-1.922-1.331-2.128 2.334.947 1.622-1.922Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgCn;
