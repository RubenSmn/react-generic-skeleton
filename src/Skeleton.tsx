import React from "react";

export interface SkeletonProps {
  children: React.ReactElement;
}

export const Skeleton = ({ children }: SkeletonProps) => {
  if (children.type === "br") return null;

  const clone = React.cloneElement(children, {
    style: { ...children.props.style, visibility: "hidden", margin: 0 },
  });

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, lightgray 45%, #ddd 55%, lightgray 100%)",
        backgroundSize: "200% 200%",
        animation: "pulse 1.5s ease-in-out 0.5s infinite",
        // animation: "wave 5s ease infinite",
        borderRadius: "12px",
        margin: children.props.style?.margin ?? "0",
        width: "fit-content",
      }}
    >
      {clone}
    </div>
  );
};
