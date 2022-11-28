import React from "react";
import { mergeMargins } from "./utils/style";
import {
  cloneElementWithSkeletonStyles,
  mergeClassName,
  resolveAnimationProps,
} from "./utils/element";
import { TextSkeleton } from "./skeletons/TextSkeleton";
import { ListSkeleton } from "./skeletons/ListSkeleton";
import { ImageSkeleton } from "./skeletons/ImageSkeleton";
import { useSkeletonConfig } from "./SkeletonProvider";

export interface SkeletonProps {
  children: React.ReactElement | string | number;
}

export const Skeleton = ({ children }: SkeletonProps) => {
  const { borderRadius, background, animation } = useSkeletonConfig();

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

  const calculatedMargin = mergeMargins(children.props.style);

  const clone = cloneElementWithSkeletonStyles(children);

  const { animationProps, animationClassName } =
    resolveAnimationProps(animation);

  const mergedClassName = mergeClassName("rgs-skeleton", animationClassName);

  return (
    <div
      className={mergedClassName}
      style={{
        margin: calculatedMargin,
        borderRadius: borderRadius,
        background: background,
        ...animationProps,
      }}
    >
      {clone}
    </div>
  );
};
