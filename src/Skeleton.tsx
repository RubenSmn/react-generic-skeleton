import React from "react";
import { mergeMargins } from "./utils/style";

export interface SkeletonProps {
  children: React.ReactElement | string | number;
}

export interface TextSkeletonProps {
  children: string | number;
}

export interface ListSkeletonProps {
  children: React.ReactElement;
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

export const ListSkeleton = ({
  children,
}: ListSkeletonProps): React.ReactElement | null => {
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
    }
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

export const Skeleton = ({ children }: SkeletonProps) => {
  if (typeof children === "string" || typeof children === "number")
    return <TextSkeleton>{children}</TextSkeleton>;

  if (children.type === "br") return null;

  if (
    (!(children instanceof Array) && children.type === "ul") ||
    children.type === "ol"
  ) {
    return <ListSkeleton>{children}</ListSkeleton>;
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
