import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.711 10.571a6.285 6.285 0 0 0-1.754 1.03c-.911.772-1.543 1.809-1.812 3.087-.095.455-.145.94-.145 1.455 0 1.011.191 1.88.605 2.599.415.723 1.013 1.22 1.704 1.555l.016.008C8.648 20.939 10.378 21 12 21c.203 0 .407-.001.612-.004.395-.005.793-.018 1.186-.046.219-.015.437-.034.652-.06.8-.095 1.564-.268 2.225-.585.697-.335 1.302-.835 1.72-1.563.414-.719.605-1.588.605-2.6 0-1.96-.722-3.495-1.957-4.54a6.252 6.252 0 0 0-1.754-1.03A4.495 4.495 0 0 0 16.5 7.5a4.5 4.5 0 1 0-7.789 3.071Zm6.907 2.45C14.76 12.362 13.507 12 12 12c-1.514 0-2.773.366-3.63 1.03-.82.636-1.37 1.62-1.37 3.113 0 .765.145 1.265.338 1.602.024.04.049.08.075.118.183.268.435.474.777.638.394.189.878.31 1.452.385.512.067 1.094.099 1.746.11.198.003.402.004.612.004 1.687 0 2.96-.091 3.81-.499l.072-.036a1.82 1.82 0 0 0 .85-.854c.157-.332.268-.799.268-1.468 0-1.494-.55-2.477-1.37-3.113l-.012-.01ZM14.5 7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUserMedium;
