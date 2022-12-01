import React from "react";
import { Skeleton } from "./Skeleton";

export interface SkeletonWrapperProps {
  children: any;
  /**
   * If `true`, the skeleton will show.
   */
  isLoading: boolean;
}

export const SkeletonWrapper = ({
  children,
  isLoading,
}: SkeletonWrapperProps): React.ReactElement | null => {
  if (children === null || children === undefined) return null;
  if (!isLoading) return children;

  if (typeof children === "string" || typeof children === "number") {
    return <Skeleton>{children}</Skeleton>;
  }

  // if the components are wrapped in a Fragment replace children with the children from the Fragment
  if (children.type === React.Fragment) {
    children = children.props.children;
  }

  const childrenWithSkeleton = React.Children.map(children, (child) => {
    return <Skeleton>{child}</Skeleton>;
  });
  return <>{childrenWithSkeleton}</>;
};
