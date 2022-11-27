import React from "react";
import { useSkeletonConfig } from "../SkeletonProvider";
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

  const { borderRadius, background, animation } = useSkeletonConfig();

  const calculatedClassName = mergeClassName("rgs-skeleton", className);

  return (
    <div
      className={calculatedClassName}
      style={{
        borderRadius: borderRadius,
        background: background,
        ...animation,
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
