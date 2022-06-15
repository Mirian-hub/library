import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAmountTotalPoundMedium = ({
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
      d="M9 2.959a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0v-3h5.586L19 9.373V20.96h-4a1 1 0 1 0 0 2h4a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L16 3.545a2 2 0 0 0-1.414-.586H9Zm-1.455 17h4.42v2H3.98v-2h1.21c.58-.436.903-.936.903-1.452 0-.37-.13-.742-.323-1.129H3.9V15.62h.968a3.52 3.52 0 0 1-.274-1.322c0-2.065 1.629-3.34 3.693-3.34 2.274 0 3.645 1.21 3.79 3.356l-2.354.097c-.033-.888-.581-1.388-1.404-1.388-.822 0-1.322.484-1.322 1.275 0 .483.145.919.339 1.322h3.048v1.758H8.223c.096.274.16.565.16.887a2.17 2.17 0 0 1-.838 1.694Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAmountTotalPoundMedium;
