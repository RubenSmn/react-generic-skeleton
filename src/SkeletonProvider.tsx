import React, { createContext, useContext } from "react";

export interface Animation {
  /**
   * Name of the custom animation
   */
  animationName?: string;
  /**
   * The duration of the animaiton
   */
  animationDuration?: string;
  /**
   * The timing function of the animation
   */
  animationTimingFunction?: string;
  /**
   * The delay of the animation
   */
  animationDelay?: string;
}

export interface SkeletonConfig {
  /**
   * The number of pixels that will be applied to the borderRadius of the skeletons
   */
  borderRadius?: number;
  /**
   * The animation that will be played for the skeletons
   */
  animation?: Animation | "pulse" | "wave";
  /**
   * The background for the skeletons
   */
  background?: string;
}

export interface SkeletonProviderProps {
  children: React.ReactNode;
  config?: SkeletonConfig;
}

export const defaultSkeletonConfig: SkeletonConfig = {
  animation: "pulse",
};

export const SkeletonContext = createContext<SkeletonConfig>(
  defaultSkeletonConfig,
);

export const SkeletonProvider = ({
  children,
  config = defaultSkeletonConfig,
}: SkeletonProviderProps) => {
  return (
    <SkeletonContext.Provider value={config}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeletonConfig = () => useContext(SkeletonContext);
