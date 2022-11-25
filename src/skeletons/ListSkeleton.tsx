import React from "react";
import { cloneElementWithSkeletonStyles } from "../utils/element";
import { mergeMargins } from "../utils/style";

export interface ListSkeletonProps {
  children: React.ReactElement;
  isLoading?: boolean;
}

export const ListSkeleton = ({
  children,
  isLoading = true,
}: ListSkeletonProps): React.ReactElement | null => {
  if (isLoading === false) return children;

  const calculatedMargin = children.props.style
    ? mergeMargins(children.props.style)
    : 0;

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

  return (
    <div
      className="rgs-skeleton__list"
      style={{
        margin: calculatedMargin,
      }}
    >
      {childrenInList}
    </div>
  );
};
