import React from "react";
import { Skeleton } from "./Skeleton";

export interface SkeletonWrapperProps {
  children: React.ReactElement;
  isLoading: boolean;
}

export const SkeletonWrapper = ({
  children,
  isLoading,
}: SkeletonWrapperProps) => {
  if (!children) return <></>;
  if (!isLoading) return <>{children}</>;

  // if the components are wrapped in a Fragment replace children with the children from the Fragment
  if (children.type === React.Fragment) children = children.props.children;

  // no clue what is better, this
  return children.map((child, idx) => <Skeleton key={idx}>{child}</Skeleton>);
  // or this
  // return React.Children.map(children, (child) => {
  //   return <Skeleton>{child}</Skeleton>;
  // });
};
