import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocumentPdfMedium = ({
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
      d="M5 4.959a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 3.545l4.414 4.414A2 2 0 0 1 19 9.373v2.586h-2V9.373L12.586 4.96H7v7H5v-7Zm-3 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7ZM7.382 18c1 0 1.824-.592 1.824-1.696 0-1.096-.768-1.696-1.768-1.696H5.15v5.6h1.192V18h1.04Zm-1.04-2.336h.928c.408 0 .696.256.696.648 0 .384-.248.632-.68.632h-.944v-1.28Zm3.652 4.544h1.992c1.384 0 2.688-.912 2.688-2.84 0-1.88-1.304-2.76-2.68-2.76h-2v5.6Zm1.192-1.056v-3.488h.728c.896 0 1.52.656 1.52 1.704 0 1.136-.592 1.784-1.496 1.784h-.752Zm7.778-1.432v-1.048h-2.2v-1.008h2.44v-1.056h-3.632v5.6h1.192V17.72h2.2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4.959a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 3.545l4.414 4.414A2 2 0 0 1 19 9.373v2.586h-2V9.373L12.586 4.96H7v7H5v-7Zm-3 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7ZM7.382 18c1 0 1.824-.592 1.824-1.696 0-1.096-.768-1.696-1.768-1.696H5.15v5.6h1.192V18h1.04Zm-1.04-2.336h.928c.408 0 .696.256.696.648 0 .384-.248.632-.68.632h-.944v-1.28Zm3.652 4.544h1.992c1.384 0 2.688-.912 2.688-2.84 0-1.88-1.304-2.76-2.68-2.76h-2v5.6Zm1.192-1.056v-3.488h.728c.896 0 1.52.656 1.52 1.704 0 1.136-.592 1.784-1.496 1.784h-.752Zm7.778-1.432v-1.048h-2.2v-1.008h2.44v-1.056h-3.632v5.6h1.192V17.72h2.2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDocumentPdfMedium;
