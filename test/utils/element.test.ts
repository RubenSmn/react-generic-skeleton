import React from "react";
import { cloneStyle } from "../../src/constants";
import { SkeletonConfig } from "../../src/SkeletonProvider";
import {
  cloneElementWithSkeletonStyles,
  mergeClassName,
  resolveAnimationProps,
} from "../../src/utils/element";

describe("Utils - Element - cloneElementWithSkeletonStyles", () => {
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

describe("Utils - Element - mergeClassName", () => {
  const predefined = "awesome-className";

  describe("given the extra classnames are not present", () => {
    it("should return the predefined one", () => {
      const mergedClassName = mergeClassName(predefined);

      expect(mergedClassName).toBe(predefined);
    });
  });

  describe("given the extra classnames are present", () => {
    it("should return the merged className", () => {
      const extra = ["more", "and", "even-more"];

      const mergedClassName = mergeClassName(predefined, extra);

      expect(mergedClassName).toBe([predefined, ...extra].join(" "));
    });
  });

  describe("given the extra classnames is any empty array", () => {
    it("should return the predefined one", () => {
      const extra: string[] = [];

      const mergedClassName = mergeClassName(predefined, extra);

      expect(mergedClassName).toBe(predefined);
    });
  });

  describe("given the extra classnames has undefined classnames", () => {
    it("should return the merged className and fitler out undefined", () => {
      const extra = ["more", undefined, "test"];

      const mergedClassName = mergeClassName(predefined, extra);

      expect(mergedClassName).toBe(`${predefined} more test`);
    });
  });
});

describe("Utils - Element - resolveAnimationProps", () => {
  describe("given the animation is a string", () => {
    it("should return the correct animationClassName", () => {
      const animation: SkeletonConfig["animation"] = "wave";
      const expected = `rgs-skeleton-${animation}`;

      const { animationClassName } = resolveAnimationProps(animation);

      expect(animationClassName).toBe(expected);
    });
  });

  describe("given the animation is an object", () => {
    it("should return the correct animationProps", () => {
      const animation: SkeletonConfig["animation"] = {
        animationName: "something custom",
        animationDelay: "4s",
      };

      const { animationClassName, animationProps } =
        resolveAnimationProps(animation);

      expect(animationClassName).toBe("");

      expect(animationProps.animationName).toBe(animation.animationName);
      expect(animationProps.animationDelay).toBe(animation.animationDelay);
    });
  });
});
