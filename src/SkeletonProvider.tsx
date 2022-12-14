import React, { createContext, useContext } from "react";

/**
 * The animation for the skeletons
 *
 * @animationName name of the custom animation
 * @animationDuration the duration of the animation
 * @animationTimingFunction the timing function of the animation
 * @animationDelay the delay of the animation
 */
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

/**
 * The config for the skeletons
 *
 * @borderRadius the number of pixels that will be applied to the borderRadius of the skeletons
 * @animation the animation that will be played for the skeletons
 * @background the background for the skeletons
 */
export interface SkeletonConfig {
  /**
   * The number of pixels that will be applied to the borderRadius of the skeletons
   *
   * @defaultValue `12`
   */
  borderRadius?: number;
  /**
   * The animation that will be played for the skeletons
   *
   * @defaultValue `pulse`
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
