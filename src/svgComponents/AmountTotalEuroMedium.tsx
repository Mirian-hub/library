import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAmountTotalEuroMedium = ({
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
      d="M9 2.959a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0v-3h5.586L19 9.373V20.96h-3a1 1 0 1 0 0 2h3a2 2 0 0 0 2-2V9.373a2 2 0 0 0-.586-1.414L16 3.545a2 2 0 0 0-1.414-.586H9Zm2.087 15.992 1.552 1.568c-.864 1.04-2.096 1.632-3.792 1.632-2.304 0-4.144-1.248-4.784-3.664H2.575V17.03h1.28c-.016-.16-.016-.32-.016-.48 0-.16 0-.32.016-.48h-1.28v-1.44h1.504c.64-2.32 2.48-3.568 4.768-3.568 1.744 0 2.88.592 3.808 1.664l-1.568 1.504c-.464-.544-1.2-1.104-2.24-1.104-1.088 0-1.92.528-2.368 1.504h2.704v1.44H6.127c-.016.16-.016.32-.016.48 0 .16 0 .32.016.48h3.056v1.456H6.447c.448 1.04 1.296 1.584 2.4 1.584 1.056 0 1.728-.56 2.24-1.12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAmountTotalEuroMedium;
