import React from "react";
import { mergeClassName } from "../utils/element";

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

  const calculatedClassName = mergeClassName("rgs-skeleton", className);

  return (
    <div className={calculatedClassName}>
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
