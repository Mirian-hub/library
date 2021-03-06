import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShowSmall = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.113 8.23c-.068-.083-.129-.16-.183-.23a13.275 13.275 0 0 1 1.572-1.693C4.702 5.228 6.276 4.25 8 4.25c1.724 0 3.299.978 4.498 2.057A13.268 13.268 0 0 1 14.07 8a13.269 13.269 0 0 1-1.572 1.693C11.298 10.772 9.724 11.75 8 11.75c-1.724 0-3.299-.978-4.498-2.057a13.276 13.276 0 0 1-1.39-1.464Zm13.51-.646L15 8l.624.416v.001l-.002.001-.002.004-.009.013a4.958 4.958 0 0 1-.142.2 14.787 14.787 0 0 1-1.967 2.172c-1.3 1.171-3.226 2.443-5.502 2.443s-4.201-1.272-5.502-2.443A14.78 14.78 0 0 1 .531 8.636a8.681 8.681 0 0 1-.142-.2L.38 8.421l-.002-.004-.001-.001S.375 8.415 1 8l-.624-.416v-.001l.002-.001.002-.004.009-.013a5.183 5.183 0 0 1 .142-.2 14.774 14.774 0 0 1 1.967-2.172C3.798 4.022 5.724 2.75 8 2.75s4.201 1.272 5.502 2.443a14.781 14.781 0 0 1 1.967 2.171 8.764 8.764 0 0 1 .142.2l.009.014.003.004v.001ZM15 8l.624-.416a.75.75 0 0 1 0 .832L15 8ZM.376 7.584 1 8l-.624.416a.75.75 0 0 1 0-.832ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShowSmall;
