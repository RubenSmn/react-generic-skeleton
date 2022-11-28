import React from "react";
import { cloneStyle } from "../../src/constants";
import { cloneElementWithSkeletonStyles } from "../../src/utils/element";

describe("Utils - Element", () => {
  describe("given the element is present with no custom style", () => {
    it("should return the clone with applied styles", () => {
      const element = React.createElement("div");

      const clone = cloneElementWithSkeletonStyles(element);

      const style = clone.props.style;

      expect(style.margin).toBe(cloneStyle.margin);
      expect(style.visibility).toBe(cloneStyle.visibility);
    });
  });

  describe("given the element is present with a custom style", () => {
    it("should return the clone with the custom style", () => {
      const element = React.createElement("div");

      const customStyle: React.CSSProperties = {
        backgroundColor: "#C77",
        margin: 12,
      };

      const clone = cloneElementWithSkeletonStyles(element, customStyle);

      const style = clone.props.style;

      expect(style.margin).toBe(customStyle.margin);
      expect(style.background).toBe(customStyle.background);
    });
  });
});
