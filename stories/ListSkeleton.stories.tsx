import React from "react";
import { Meta, Story } from "@storybook/react";
import { ListSkeleton, ListSkeletonProps } from "../src/skeletons/ListSkeleton";

const meta: Meta = {
  title: "ListSkeleton",
  component: ListSkeleton,
  argTypes: {
    childrenCount: {
      name: "Children Count",
      control: "number",
      type: "number",
      defaultValue: 3,
    },
  },
};

export default meta;

const Template: Story<ListSkeletonProps & { childrenCount: number }> = ({
  childrenCount,
  ...args
}) => (
  <ListSkeleton {...args}>
    <ul
      style={{
        marginBlock: 16,
      }}
    >
      {Array.from({ length: childrenCount }, (_, x) => x).map((i) => {
        const randomPadding = Math.round(Math.random() * (48 - 0) + 1);
        return (
          <li key={`list-story-${i}`} style={{ paddingRight: randomPadding }}>
            List item: {i}
          </li>
        );
      })}
    </ul>
  </ListSkeleton>
);

export const Default = Template.bind({});

Default.args = {
  isLoading: true,
};

export const Long = Template.bind({});

Long.args = {
  isLoading: true,
  childrenCount: 12,
};
