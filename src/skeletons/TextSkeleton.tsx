import React from "react";

export interface TextSkeletonProps {
  children: string | number;
  isLoading?: boolean;
}

const TextSkeleton = ({
  children,
  isLoading = true,
}: TextSkeletonProps): React.ReactElement => {
  if (isLoading === false) return <>{children}</>;

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

export default TextSkeleton;
