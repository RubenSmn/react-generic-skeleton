import React from "react";

export const cloneElementWithSkeletonStyles = (
  element: React.ReactElement,
  style: React.CSSProperties = {
    visibility: "hidden",
    margin: 0,
  },
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
