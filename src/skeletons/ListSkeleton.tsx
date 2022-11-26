import React from "react";
import {
  cloneElementWithSkeletonStyles,
  mergeClassName,
} from "../utils/element";
import { mergeMargins } from "../utils/style";

export interface ListSkeletonProps {
  children: React.ReactElement;
  isLoading?: boolean;
  className?: string;
}

export const ListSkeleton = ({
  children,
  isLoading = true,
  className,
}: ListSkeletonProps): React.ReactElement | null => {
  if (isLoading === false) return children;

  const calculatedMargin = mergeMargins(children.props.style);

  const childrenInList = React.Children.map(
    children.props.children,
    (child) => {
      const clone = cloneElementWithSkeletonStyles(child, {
        visibility: "hidden",
        paddingLeft: 20,
        display: "inherit",
      });

      return <div className="rgs-skeleton">{clone}</div>;
    },
  );

  const calculatedClassName = mergeClassName("rgs-skeleton__list", className);

  return (
    <div
      className={calculatedClassName}
      style={{
        margin: calculatedMargin,
      }}
    >
      {childrenInList}
    </div>
  );
};
