## Installing react-generic-skeleton

```bash
yarn add react-generic-skeleton

# or

npm install react-generic-skeleton
```

## Usage

You can wrap the `SkeletonWrapper` around your components and this will generate
the skeletons for you.

```tsx
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
