import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCf = ({
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
    <g clipPath="url(#CF_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M45.082 12.522C41.981 6.838 36.648 2.547 30.262.825l-1.044 11.697h15.864ZM2.918 12.522h15.865L17.739.825C11.352 2.547 6.02 6.838 2.92 12.522Z"
        fill="#0052B4"
      />
      <path
        d="M29.218 24v11.478h15.864A23.892 23.892 0 0 0 48 24H29.218ZM18.783 24H0c0 4.158 1.058 8.069 2.918 11.478h15.864V24Z"
        fill="#6DA544"
      />
      <path
        d="M2.918 35.478c3.102 5.684 8.434 9.975 14.821 11.697l1.044-10.23-15.865-1.467ZM30.261 47.175c6.387-1.722 11.72-6.013 14.821-11.697l-15.864 1.467 1.043 10.23Z"
        fill="#FFDA44"
      />
      <path
        d="m29.218 36.945 15.864-1.467H29.218v1.467ZM18.783 35.478H2.918l15.865 1.467v-1.467Z"
        fill="#FFDA44"
      />
      <path
        d="M24 0c-2.166 0-4.264.289-6.26.827v46.346c1.996.538 4.094.827 6.26.827 2.166 0 4.265-.289 6.261-.827V.827A24.026 24.026 0 0 0 24.001 0Z"
        fill="#D80027"
      />
      <path
        d="m12.91 5.217.647 1.993h2.095l-1.695 1.232.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.696-1.232h2.096l.647-1.993Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="CF_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCf;
