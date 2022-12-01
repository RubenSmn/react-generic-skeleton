import React from "react";
import { useSkeletonConfig } from "../SkeletonProvider";
import {
  cloneElementWithSkeletonStyles,
  mergeClassName,
  resolveAnimationProps,
} from "../utils/element";
import { mergeMargins } from "../utils/style";

export interface ListSkeletonProps {
  children: React.ReactElement;
  /**
   * If `true`, the skeleton will show.
   */
  isLoading?: boolean;
  /**
   * The number of pixels that will be applied to shift the list from the left.
   */
  indent?: number;
  /**
   * The number of *marginTop* and *marginBottom* that will be applied to the list items.
   */
  itemSpacing?: number;
  className?: string;
}

export const ListSkeleton = ({
  children,
  isLoading = true,
  indent = 20,
  itemSpacing = 0,
  className,
}: ListSkeletonProps): React.ReactElement | null => {
  const { borderRadius, background, animation } = useSkeletonConfig();

  if (isLoading === false) return children;

  const calculatedMargin = mergeMargins(children.props.style);

  const { animationProps, animationClassName } =
    resolveAnimationProps(animation);

  const childrenInList = React.Children.map(
    children.props.children,
    (child) => {
      const clone = cloneElementWithSkeletonStyles(child, {
        visibility: "hidden",
        paddingLeft: 20,
        display: "inherit",
      });

      const childClassName = mergeClassName("rgs-skeleton", animationClassName);

      return (
        <div
          className={childClassName}
          style={{
            marginBlock: itemSpacing === 0 ? undefined : itemSpacing,
            borderRadius: borderRadius,
            background: background,
            ...animationProps,
          }}
        >
          {clone}
        </div>
      );
    },
  );

  const calculatedClassName = mergeClassName("rgs-skeleton__list", className);

  return (
    <div
      className={calculatedClassName}
      style={{
        margin: calculatedMargin,
        paddingLeft: indent === 20 ? undefined : indent,
      }}
    >
      {childrenInList}
    </div>
  );
};
