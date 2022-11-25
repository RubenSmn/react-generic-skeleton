import React from "react";
import { mergeMargins } from "./utils/style";
import { cloneElementWithSkeletonStyles } from "./utils/element";
import { TextSkeleton } from "./skeletons/TextSkeleton";
import { ListSkeleton } from "./skeletons/ListSkeleton";
import { ImageSkeleton } from "./skeletons/ImageSkeleton";

export interface SkeletonProps {
  children: React.ReactElement | string | number;
}

export const Skeleton = ({ children }: SkeletonProps) => {
  if (typeof children === "string" || typeof children === "number")
    return <TextSkeleton>{children}</TextSkeleton>;

  if (children.type === "br") return null;

  if (
    !(children instanceof Array) &&
    (children.type === "ul" || children.type === "ol")
  ) {
    return <ListSkeleton>{children}</ListSkeleton>;
  }

  if (!(children instanceof Array) && children.type === "img") {
    return <ImageSkeleton>{children}</ImageSkeleton>;
  }

  const calculatedMargin = children.props.style
    ? mergeMargins(children.props.style)
    : 0;

  const clone = cloneElementWithSkeletonStyles(children);

  return (
    <div
      className="rgs-skeleton"
      style={{
        borderRadius: 12,
        margin: calculatedMargin,
        width: "fit-content",
      }}
    >
      {clone}
    </div>
  );
};
