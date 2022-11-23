import React from "react";
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
      return (
        <div
          style={{
            background:
              "linear-gradient(90deg, lightgray 45%, #ddd 55%, lightgray 100%)",
            backgroundSize: "200% 200%",
            animation: "pulse 1.5s ease-in-out 0.5s infinite",
            borderRadius: 12,
            width: "fit-content",
          }}
        >
          <span
            style={{
              visibility: "hidden",
              paddingLeft: 20,
              display: "inherit",
            }}
          >
            {child}
          </span>
        </div>
      );
    },
  );

  return (
    <div
      style={{
        margin: calculatedMargin,
        paddingLeft: 20,
      }}
    >
      {childrenInList}
    </div>
  );
};
