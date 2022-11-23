import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { SkeletonWrapper } from "../.";
import { TextSkeleton } from "../.";
import { ImageSkeleton } from "../.";
import { ListSkeleton } from "../.";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const formElements = (
    <>
      Here is sometext
      <label htmlFor="input1">Input 1</label>
      <input
        type="text"
        name="value1"
        id="input1"
        style={{ margin: "8px 0" }}
      />
      <label htmlFor="input2">Input 2</label>
      <input
        type="text"
        name="value2"
        id="input2"
        style={{ margin: "8px 0" }}
      />
      <label htmlFor="input3">Input 3</label>
      <textarea
        id="input3"
        name="story"
        rows={5}
        cols={33}
        defaultValue={"It was a dark and stormy night..."}
        style={{ margin: "8px 0" }}
      />
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
    <TextSkeleton isLoading={isLoading}>
      Sometext in here to fill stuff
    </TextSkeleton>
  );

  // return (
  //   <div>
  //     <button onClick={() => setIsLoading((x) => !x)}>toggle isLoading</button>
  //     <SkeletonWrapper isLoading={isLoading}>
  //       <h2
  //         style={{
  //           // marginBottom: 12,
  //           marginBlock: 12,
  //         }}
  //       >
  //         A nice beach on this picture
  //       </h2>
  //       <img
  //         height="160"
  //         src={
  //           "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
  //         }
  //       />
  //     </SkeletonWrapper>
  //   </div>
  // );

  return (
    <>
      <button onClick={() => setIsLoading((x) => !x)}>toggle isLoading</button>
      <div>
        <ImageSkeleton isLoading={isLoading}>
          <img
            height="160"
            src={
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            }
          />
        </ImageSkeleton>
      </div>
      <ListSkeleton isLoading={isLoading}>
        <ul
          style={{
            marginBlock: 16,
          }}
        >
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </ListSkeleton>
    </>
  );

  return (
    <>
      <button onClick={() => setIsLoading((x) => !x)}>toggle isLoading</button>
      <div
        style={{
          display: "flex",
          gap: 64,
        }}
      >
        <div>
          <SkeletonWrapper isLoading={isLoading}>
            <h2
              style={{
                marginBlock: 20,
              }}
            >
              An Unordered HTML List
            </h2>
            <ul
              style={{
                marginBlock: 16,
              }}
            >
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
            <h2
              style={{
                marginBlock: 20,
              }}
            >
              An Ordered HTML List
            </h2>
            <ol>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ol>
          </SkeletonWrapper>
        </div>
        <div>
          <h2
            style={{
              marginBlock: 20,
            }}
          >
            An Unordered HTML List
          </h2>
          <ul
            style={{
              marginBlock: 16,
            }}
          >
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
          <h2
            style={{
              marginBlock: 20,
            }}
          >
            An Ordered HTML List
          </h2>
          <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
