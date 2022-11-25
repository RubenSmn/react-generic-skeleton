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
