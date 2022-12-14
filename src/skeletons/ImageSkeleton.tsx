import React from "react";
import { useSkeletonConfig } from "../SkeletonProvider";
import {
  cloneElementWithSkeletonStyles,
  mergeClassName,
  resolveAnimationProps,
} from "../utils/element";
import { mergeMargins } from "../utils/style";

export interface ImageSkeletonProps {
  children: React.ReactElement<HTMLImageElement>;
  /**
   * If `true`, the skeleton will show.
   */
  isLoading?: boolean;
  /**
   * If `true`, the skeleton will be a circle.
   */
  isRound?: boolean;
  /**
   * If `true`, the skeleton will be show the placeholder.
   */
  showPlaceholder?: boolean;
  className?: string;
}

export const ImageSkeleton = ({
  children,
  isLoading = true,
  isRound = false,
  showPlaceholder = false,
  className,
}: ImageSkeletonProps): React.ReactElement => {
  const { borderRadius, background, animation } = useSkeletonConfig();

  if (isLoading === false) return <>{children}</>;

  let size;
  if (isRound === true) {
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

  const { animationProps, animationClassName } =
    resolveAnimationProps(animation);

  const calculatedClassName = mergeClassName(
    "rgs-skeleton rgs-skeleton__image",
    [className, animationClassName],
  );

  return (
    <div
      className={calculatedClassName}
      style={{
        borderRadius: isRound ? "50%" : borderRadius,
        margin: calculatedMargin,
        width: size ?? undefined,
        height: size ?? undefined,
        background: background,
        ...animationProps,
      }}
    >
      {showPlaceholder ? (
        <svg className="rgs-skeleton__image__placeholder" viewBox="0 0 24 16">
          <circle cx="7" r="1.2" cy="5.4" />
          <path d="M8.5 8 l2.5 3.01 L14.5 6.5 l4.5 6 H5 l3.5-4.5z" />
        </svg>
      ) : null}
      {clone}
    </div>
  );
};
