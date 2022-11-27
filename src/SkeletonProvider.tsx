import React, { createContext, useContext } from "react";

interface Animation {
  animationName?: string;
  animationDuration?: string;
  animationTimingFunction?: string;
  animationDelay?: string;
}

export interface SkeletonConfig {
  borderRadius?: number;
  animation?: Animation;
  background?: string;
}

export interface SkeletonProviderProps {
  children: React.ReactNode;
  config?: SkeletonConfig;
}

export const SkeletonContext = createContext<SkeletonConfig>({});

export const SkeletonProvider = ({
  children,
  config,
}: SkeletonProviderProps) => {
  return (
    <SkeletonContext.Provider value={config ?? {}}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeletonConfig = () => useContext(SkeletonContext);
