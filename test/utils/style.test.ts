import { mergeMargins } from "../../src/utils/style";

describe("Utils - Style - mergeMargins", () => {
  describe("given the style has margins", () => {
    it("should return a string with the merged margins", () => {
      const style = { marginBlock: 12, marginInline: 8 };

      const margins = mergeMargins(style);

      expect(margins).toBe(
        `${style.marginBlock}px ${style.marginInline}px ${style.marginBlock}px ${style.marginInline}px`,
      );
    });
  });

  describe("given the style has top and bottom margins", () => {
    it("should return a string with those margins", () => {
      const style = {
        marginTop: 2,
        marginLeft: 4,
      };
      const margins = mergeMargins(style);

      expect(margins).toBe(`${style.marginTop}px 0 0 ${style.marginLeft}px`);
    });
  });

  describe("given the style has no margins", () => {
    it("should return undefined", () => {
      const margins = mergeMargins({ padding: 2 });

      expect(margins).toBe(undefined);
    });
  });
});
