import React from "react";

export interface TextSkeletonProps {
  children: string | number;
  isLoading?: boolean;
}

export const TextSkeleton = ({
  children,
  isLoading = true,
}: TextSkeletonProps): React.ReactElement => {
  if (isLoading === false) return <>{children}</>;

  return (
    <div className="rgs-skeleton">
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
