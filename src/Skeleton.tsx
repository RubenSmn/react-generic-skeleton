import React from "react";
import { mergeMargins } from "./utils/style";

export interface SkeletonProps {
  children: React.ReactElement | string | number;
}

export interface TextSkeletonProps {
  children: string | number;
}

export const TextSkeleton = ({
  children,
}: TextSkeletonProps): React.ReactElement => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, lightgray 45%, #ddd 55%, lightgray 100%)",
        backgroundSize: "200% 200%",
        animation: "pulse 1.5s ease-in-out 0.5s infinite",
        borderRadius: 12,
        margin: 0,
        width: "fit-content",
      }}
    >
      <span
        style={{
          visibility: "hidden",
        }}
      >
        {children}
      </span>
    </div>
  );
};

export const Skeleton = ({ children }: SkeletonProps) => {
  if (typeof children === "string" || typeof children === "number")
    return <TextSkeleton>{children}</TextSkeleton>;

  if (children.type === "br") return null;

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
        width: "fit-content",
      }}
    >
      {clone}
    </div>
  );
};
