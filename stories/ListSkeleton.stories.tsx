import React from "react";
import { Meta, Story } from "@storybook/react";
import { ListSkeleton, ListSkeletonProps } from "../src/skeletons/ListSkeleton";

const meta: Meta = {
  title: "ListSkeleton",
  component: ListSkeleton,
  argTypes: {
    isLoading: {
      description: "If `true`, the skeleton will show.",
      type: "boolean",
    },
    children: {
      description: "`element`",
      type: "function",
    },
  },
};

export default meta;

const Template: Story<ListSkeletonProps & { childrenCount: number }> = ({
  childrenCount = 3,
  ...args
}) => (
  <ListSkeleton {...args}>
    <ul
      style={{
        marginBlock: 0,
      }}
    >
      {Array.from({ length: childrenCount }, (_, x) => x).map((i) => {
        return <li key={`list-story-${i}`}>List item: {i}</li>;
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
