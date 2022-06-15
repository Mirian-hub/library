import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlertsMedium = ({
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
      d="M12 3.959a1 1 0 0 0-1 1v1c0 .033.002.066.005.099A5.002 5.002 0 0 0 7 10.958V13c0 .608-1.11 2.497-1.98 3.883-.426.678.057 1.576.858 1.576h12.244c.8 0 1.284-.898.858-1.576C18.11 15.497 17 13.608 17 13v-2.041c0-2.42-1.72-4.44-4.005-4.901.003-.033.005-.066.005-.1v-1a1 1 0 0 0-1-1Zm3 9v-2a3 3 0 0 0-6 0V13c0 .59-.223 1.152-.34 1.434a13.4 13.4 0 0 1-.56 1.16c-.151.281-.316.573-.485.865h8.77c-.17-.292-.334-.584-.484-.865-.208-.388-.408-.79-.562-1.16C15.223 14.152 15 13.59 15 13v-.041Zm-4 7a1 1 0 1 0 2 0h2a3 3 0 0 1-6 0h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertsMedium;
