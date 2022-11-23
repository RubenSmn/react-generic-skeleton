import React from "react";
import { mergeMargins } from "./utils/style";
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

  const clone = React.cloneElement(children, {
    style: {
      ...children.props.style,
      visibility: "hidden",
      margin: 0,
    },
  });

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, lightgray 45%, #ddd 55%, lightgray 100%)",
        backgroundSize: "200% 200%",
        animation: "pulse 1.5s ease-in-out 0.5s infinite",
        borderRadius: 12,
        margin: calculatedMargin,
        display: "flex",
        width: "fit-content",
      }}
    >
      {clone}
    </div>
  );
};
