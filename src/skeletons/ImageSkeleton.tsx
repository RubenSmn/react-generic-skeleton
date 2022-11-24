import React from "react";
import { cloneElementWithSkeletonStyles } from "../utils/element";
import { mergeMargins } from "../utils/style";

export interface ImageSkeletonProps {
  children: React.ReactElement<HTMLImageElement>;
  isLoading?: boolean;
  round?: boolean;
}

export const ImageSkeleton = ({
  children,
  isLoading = true,
  round = false,
}: ImageSkeletonProps): React.ReactElement => {
  if (isLoading === false) return <>{children}</>;

  let size;
  if (round === true) {
    const height = children.props.height;
    const width = children.props.width;

    // check which size to use
    if (height === undefined && width === undefined) {
      size = 64;
    } else if (height === undefined) {
      size = Number(width);
    } else if (width === undefined) {
      size = Number(height);
    }
  }

  const calculatedMargin = children.props.style
    ? mergeMargins(children.props.style)
    : 0;

  const clone = cloneElementWithSkeletonStyles(children);

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, lightgray 45%, #ddd 55%, lightgray 100%)",
        backgroundSize: "200% 200%",
        animation: "pulse 1.5s ease-in-out 0.5s infinite",
        borderRadius: round ? "50%" : 12,
        margin: calculatedMargin,
        width: size ? size : "fit-content",
        height: size ?? "",
        display: "inline-flex",
      }}
    >
      {clone}
    </div>
  );
};
