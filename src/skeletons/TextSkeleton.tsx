import React from "react";
import { useSkeletonConfig } from "../SkeletonProvider";
import { mergeClassName, resolveAnimationProps } from "../utils/element";

export interface TextSkeletonProps {
  children: string | number;
  /**
   * If `true`, the skeleton will show.
   */
  isLoading?: boolean;
  className?: string;
}

export const TextSkeleton = ({
  children,
  isLoading = true,
  className,
}: TextSkeletonProps): React.ReactElement => {
  const { borderRadius, background, animation } = useSkeletonConfig();

  if (isLoading === false) return <>{children}</>;

  const { animationProps, animationClassName } =
    resolveAnimationProps(animation);

  const calculatedClassName = mergeClassName("rgs-skeleton", [
    className,
    animationClassName,
  ]);

  return (
    <div
      className={calculatedClassName}
      style={{
        borderRadius: borderRadius,
        background: background,
        ...animationProps,
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
