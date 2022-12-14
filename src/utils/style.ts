export interface MarginType {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export type MarginPositionType = "top" | "bottom" | "left" | "right";

export const mergeMargins = (style: any): string | undefined => {
  if (style === undefined) return undefined;

  const margin: MarginType = { top: "0", right: "0", bottom: "0", left: "0" };

  const availableMargins: { [key: string]: MarginPositionType[] } = {
    marginBlock: ["top", "bottom"],
    marginInline: ["left", "right"],
    marginTop: ["top"],
    marginBottom: ["bottom"],
    marginLeft: ["left"],
    marginRight: ["right"],
    margin: ["top", "bottom", "left", "right"],
  };

  const fillPositions = (
    positions: MarginPositionType[],
    value: string | number,
  ) => {
    let suffix = "";
    if (typeof value === "number") suffix = "px";
    positions.forEach((position: MarginPositionType) => {
      margin[position] = `${value}${suffix}`;
    });
  };

  Object.entries(availableMargins).forEach(([marginType, postions]) => {
    if (!(marginType in style)) return;
    const m = style[marginType];

    if (marginType !== "margin" || typeof m === "number")
      return fillPositions(postions, m);

    const values = m.split(" ");

    if (values.length === 1) {
      // margin: 12px
      fillPositions(availableMargins.margin, values[0]);
    } else if (values.length === 2) {
      // margin: 12px 8px
      fillPositions(["top", "bottom"], values[0]);
      fillPositions(["left", "right"], values[1]);
    } else if (values.length === 3) {
      // margin: 12px 8px 16px
      fillPositions(["top"], values[0]);
      fillPositions(["left", "right"], values[1]);
      fillPositions(["bottom"], values[2]);
    }
  });

  if (Object.values(margin).every((position) => position === "0"))
    return undefined;

  return `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`;
};
