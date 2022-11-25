import React from "react";

export interface TextSkeletonProps {
  children: string | number;
  isLoading?: boolean;
  className?: string;
}

export const TextSkeleton = ({
  children,
  isLoading = true,
  className,
}: TextSkeletonProps): React.ReactElement => {
  if (isLoading === false) return <>{children}</>;

  return (
    <div className={`rgs-skeleton ${className}`}>
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
