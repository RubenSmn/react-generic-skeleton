import React from "react";
import { cloneStyle } from "../constants";

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
 * @param extra - The additional className
 *
 * @returns The merged className or the predefined if no extra className is provided
 *
 */
export const mergeClassName = (predefined: string, extra?: string): string => {
  if (extra === undefined || extra === null) return predefined;

  return `${predefined} ${extra}`;
};
