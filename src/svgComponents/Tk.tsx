import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTk = ({
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
      fill="#FFDA44"
    />
    <path
      d="M38.609 11.478a16.01 16.01 0 0 0-.313 3.235c0 6.331 3.774 11.811 9.183 14.278.34-1.61.521-3.28.521-4.991C48 10.745 37.255 0 24 0S0 10.745 0 24s10.745 24 24 24c8.22 0 15.474-4.134 19.8-10.435H13.565v-3.13H45.62c.328-.678.624-1.375.888-2.087H13.565l25.044-20.87Z"
      fill="#0052B4"
    />
    <path
      d="m17.63 12.522.519 1.594h1.676l-1.356.985.518 1.595-1.356-.986-1.356.986.518-1.595-1.357-.985h1.677l.518-1.594ZM10.822 24l.647 1.993h2.096l-1.696 1.231.648 1.993-1.695-1.231-1.695 1.231.647-1.993-1.695-1.231h2.095L10.822 24ZM10.822 7.304l.647 1.993h2.096l-1.696 1.232.648 1.993-1.695-1.232-1.695 1.232.647-1.993-1.695-1.232h2.095l.648-1.993ZM5.605 16.696l.647 1.993h2.096L6.652 19.92l.648 1.993-1.695-1.232-1.696 1.232.648-1.993-1.695-1.231h2.095l.648-1.993Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgTk;
