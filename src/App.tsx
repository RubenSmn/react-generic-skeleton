import { useState, useEffect } from "react";
import { SkeletonWrapper } from "./SkeletonWrapper";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const formElements = (
    <>
      <label htmlFor="input1">Input 1</label>
      <br />
      <input
        type="text"
        name="value1"
        id="input1"
        style={{ margin: "8px 0" }}
      />
      <br />
      <label htmlFor="input2">Input 2</label>
      <br />
      <input
        type="text"
        name="value2"
        id="input2"
        style={{ margin: "8px 0" }}
      />
      <br />
      <label htmlFor="input3">Input 3</label>
      <br />
      <textarea
        id="input3"
        name="story"
        rows={5}
        cols={33}
        defaultValue={"It was a dark and stormy night..."}
        style={{ margin: "8px 0" }}
      />
      <br />
      <div
        style={{
          height: "111px",
          width: "534px",
          padding: "18px",
          margin: "23px 0",
          backgroundColor: "goldenrod",
        }}
      >
        This is a div to show some random data or do with it whatever you want.
        I'll put some weird styling on it
      </div>
      <button type="submit">submit</button>
    </>
  );

  return (
    <>
      <button onClick={() => setIsLoading((x) => !x)}>toggle isLoading</button>
      <div
        style={{
          display: "flex",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            // width: "400px",
          }}
        >
          <SkeletonWrapper isLoading={isLoading}>
            {formElements}
          </SkeletonWrapper>
        </form>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            // width: "400px",
          }}
        >
          {formElements}
        </form>
      </div>
    </>
  );
}

export default App;
