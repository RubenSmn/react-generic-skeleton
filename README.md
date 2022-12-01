## Installation

```bash
yarn add react-generic-skeleton

# or

npm install react-generic-skeleton
```

## Usage

You can wrap the `SkeletonWrapper` around your components and this will generate
the skeletons for you.

```jsx
import { SkeletonWrapper } from "react-generic-skeleton";

<SkeletonWrapper isLoading={true}>
  <h1>Here is a header</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio harum
    deleniti doloribus sunt amet quisquam quidem consequuntur voluptas!
    Voluptatum explicabo, quaerat nemo expedita voluptatibus laudantium. Id esse
    odit exercitationem consectetur!
  </p>
</SkeletonWrapper>;
```

If you want to try it out first, take a look in the
[CodeSandbox](https://codesandbox.io/s/react-generic-skeleton-example-kwt77b?file=/src/App.js)

### Documentation

The full documentation can be found
[here](https://rubensmn.github.io/react-generic-skeleton)

### Customization

```jsx
import { SkeletonProvider } from "react-generic-skeleton";

const config = {
  animation: "wave",
  background: "linear-gradient(90deg, #cc7 45%, #dbd8d8 55%, #cc7 100%)",
};

// Do this at the root of your application
function App({ children }) {
  return <SkeletonProvider config={config}>{children}</SkeletonProvider>;
}
```
