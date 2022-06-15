import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDownloadAttachmentMedium = ({
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
      d="M6.834 13.104a4.25 4.25 0 0 0 5.261 6.607c.13.502.39.976.784 1.37l.308.307A6.25 6.25 0 0 1 5.42 11.69l3.358-3.358 1.414-1.415L11.96 5.15a4.5 4.5 0 0 1 7.56 4.223 2.986 2.986 0 0 0-1.966-.38 2.5 2.5 0 0 0-4.18-2.43l-1.768 1.769-1.414 1.414-3.358 3.359Zm6.045 3.733c.173-.173.363-.321.564-.443L15 14.837v-2.829l-1.272 1.272-3.005 3.006a.75.75 0 1 1-1.061-1.061l4.42-4.42a1 1 0 0 0-1.415-1.414l-4.42 4.42a2.75 2.75 0 0 0 3.89 3.889l.298-.298c.122-.201.27-.39.444-.565ZM19 11.96a1 1 0 1 0-2 0v7.627l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L19 19.586v-7.627Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDownloadAttachmentMedium;
