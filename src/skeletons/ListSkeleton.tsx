import React from "react";
import { useSkeletonConfig } from "../SkeletonProvider";
import {
  cloneElementWithSkeletonStyles,
  mergeClassName,
} from "../utils/element";
import { mergeMargins } from "../utils/style";

export interface ListSkeletonProps {
  children: React.ReactElement;
  isLoading?: boolean;
  className?: string;
  indent?: number;
  itemSpacing?: number;
}

export const ListSkeleton = ({
  children,
  isLoading = true,
  className,
  indent = 20,
  itemSpacing = 0,
}: ListSkeletonProps): React.ReactElement | null => {
  if (isLoading === false) return children;

  const { borderRadius, background, animation } = useSkeletonConfig();

  const calculatedMargin = mergeMargins(children.props.style);

  const childrenInList = React.Children.map(
    children.props.children,
    (child) => {
      const clone = cloneElementWithSkeletonStyles(child, {
        visibility: "hidden",
        paddingLeft: 20,
        display: "inherit",
      });

      return (
        <div
          className="rgs-skeleton"
          style={{
            marginBlock: itemSpacing === 0 ? undefined : itemSpacing,
            borderRadius: borderRadius,
            background: background,
            ...animation,
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
