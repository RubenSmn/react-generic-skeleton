import React, { createContext, useContext } from "react";

interface Animation {
  animationName?: string;
  animationDuration?: string;
  animationTimingFunction?: string;
  animationDelay?: string;
}

export type AnimationNamePreset = "pulse" | "wave";

export interface SkeletonConfig {
  borderRadius?: number;
  animation?: Animation | AnimationNamePreset;
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
