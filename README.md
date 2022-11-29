## Installing react-generic-skeleton

```bash
yarn add react-generic-skeleton

# or

npm install react-generic-skeleton
```

## Usage

You can wrap the components you want to have a skeleton inside the wrapper and
the wrapper will generate the skeletons for you from the children's top level!

```tsx
import { SkeletonWrapper } from "react-generic-skeleton";

<SkeletonWrapper>
  <h1>Here is a header</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio harum
    deleniti doloribus sunt amet quisquam quidem consequuntur voluptas!
    Voluptatum explicabo, quaerat nemo expedita voluptatibus laudantium. Id esse
    odit exercitationem consectetur!
  </p>
</SkeletonWrapper>;
```
