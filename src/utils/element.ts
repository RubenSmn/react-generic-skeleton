import React from "react";
import { cloneStyle } from "../constants";
import {
  Animation,
  defaultSkeletonConfig,
  SkeletonConfig,
} from "../SkeletonProvider";

/**
 * Returns clone of the element with new style
 *
 *
 * @param element - The element to clone
 * @param style - The new style
 *
 * @returns The cloned element with new style
 *
 */
export const cloneElementWithSkeletonStyles = (
  element: React.ReactElement,
  style: React.CSSProperties = cloneStyle,
): React.ReactElement => {
  const clone = React.cloneElement(element, {
    style: {
      ...element.props.style,
      ...style,
    },
  });

  return clone;
};

/**
 * Returns new className
 *
 *
 * @param predefined - The default className of the element
 * @param extra - The additional className(s)
 *
 * @returns The merged className or the predefined if no extra className is provided
 *
 */
export const mergeClassName = (
  predefined: string,
  extra?: string | (string | undefined)[],
): string => {
  if (extra === undefined || extra === null) return predefined;

  if (typeof extra === "string") return `${predefined} ${extra}`;

  const joinedClassNames = extra.filter((x) => x !== undefined).join(" ");

  if (joinedClassNames === "") return predefined;

  return `${predefined} ${joinedClassNames}`;
};

/**
 * Returns an animationClassName and animationProps
 *
 *
 * @param animation - The animation prop from the SkeletonConfig
 *
 * @returns props - animationClassName and animationProps
 *
 */
export const resolveAnimationProps = (
  animation: SkeletonConfig["animation"],
) => {
  const props: {
    animationClassName: string;
    animationProps: Animation;
  } = {
    animationClassName: `rgs-skeleton-${defaultSkeletonConfig.animation}`,
    animationProps: {},
  };

  if (typeof animation === "string") {
    props.animationClassName = `rgs-skeleton-${animation}`;
  } else if (animation !== undefined) {
    props.animationClassName = "";
    props.animationProps = {
      ...animation,
    };
  }

  return props;
};
