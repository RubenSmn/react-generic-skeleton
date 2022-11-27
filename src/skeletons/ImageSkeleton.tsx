import React from "react";
import {
  cloneElementWithSkeletonStyles,
  mergeClassName,
} from "../utils/element";
import { mergeMargins } from "../utils/style";

export interface ImageSkeletonProps {
  children: React.ReactElement<HTMLImageElement>;
  isLoading?: boolean;
  round?: boolean;
  className?: string;
}

export const ImageSkeleton = ({
  children,
  isLoading = true,
  round = false,
  className,
}: ImageSkeletonProps): React.ReactElement => {
  if (isLoading === false) return <>{children}</>;

  let size;
  if (round === true) {
    const height = children.props.height;
    const width = children.props.width;

    // check which size to use
    if (height === undefined && width === undefined) {
      size = 64;
    } else if (height === undefined) {
      size = Number(width);
    } else if (width === undefined) {
      size = Number(height);
    }
  }

  const calculatedMargin = mergeMargins(children.props.style);

  const clone = cloneElementWithSkeletonStyles(children);

  const calculatedClassName = mergeClassName(
    "rgs-skeleton rgs-skeleton__image",
    className,
  );

  return (
    <div
      className={calculatedClassName}
      style={{
        borderRadius: round ? "50%" : undefined,
        margin: calculatedMargin,
        width: size ?? undefined,
        height: size ?? undefined,
      }}
    >
      <svg className="rgs-skeleton__image__placeholder" viewBox="0 0 24 16">
        <circle cx="7" r="1.2" cy="5.4" />
        <path d="M8.5 8 l2.5 3.01 L14.5 6.5 l4.5 6 H5 l3.5-4.5z" />
      </svg>
      {clone}
    </div>
  );
};
