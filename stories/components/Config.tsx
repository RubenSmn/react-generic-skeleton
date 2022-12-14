import { SkeletonConfig, Animation } from "../../src/SkeletonProvider";

export const SkeletonConfigComponent = ({
  animation = "pulse",
  borderRadius = 12,
  ...props
}: SkeletonConfig) => {};

export const AnimationComponent = (_props: Animation) => {};
