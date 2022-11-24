import React from "react";

export const cloneElementWithSkeletonStyles = (element: React.ReactElement) => {
  const clone = React.cloneElement(element, {
    style: {
      ...element.props.style,
      visibility: "hidden",
      margin: 0,
    },
  });

  return clone;
};
