import React from "react";
import { Meta, Story } from "@storybook/react";
import { ListSkeleton, ListSkeletonProps } from "../src/skeletons/ListSkeleton";
import PageLayout, { usePageContext } from "./PageLayout";

const meta: Meta = {
  title: "Components/ListSkeleton",
  component: ListSkeleton,
  argTypes: {
    isLoading: {
      description: "If `true`, the skeleton will show.",
      type: "boolean",
    },
    indent: {
      description: "Number used to indent the list in `px`",
      type: "number",
      control: {
        type: "range",
        min: 0,
        step: 2,
      },
    },
    itemSpacing: {
      description: "Number used to space the list items in `px`",
      type: "number",
      control: {
        type: "range",
        min: 0,
        step: 2,
      },
    },
    children: {
      description: "`element`",
      type: "function",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <PageLayout
          subtitle="Skeleton for lists"
          description="Use this wrapper to generate skeletons for lists"
        />
      ),
    },
  },
};

export default meta;

const Template: Story<ListSkeletonProps & { childrenCount: number }> = ({
  childrenCount = 3,
  ...args
}) => {
  const { isLoading } = usePageContext();
  return (
    <ListSkeleton {...args} isLoading={isLoading}>
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
};

export const Default = Template.bind({});

Default.args = {
  isLoading: true,
};

export const withManyItems = Template.bind({});

withManyItems.args = {
  isLoading: true,
  childrenCount: 12,
};
