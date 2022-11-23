import React from "react";
import ReactDOM from "react-dom";
import { Default as TextSkeleton } from "../stories/TextSkeleton.stories";

describe("TextSkeleton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <TextSkeleton>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, totam
        nulla aspernatur repellendus veniam itaque exercitationem molestiae
        delectus soluta animi nemo ex pariatur deleniti at beatae minus ducimus
        nihil rem?
      </TextSkeleton>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
