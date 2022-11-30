import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextSkeleton, TextSkeletonProps } from "../src/skeletons/TextSkeleton";
import PageLayout from "./PageLayout";

const meta: Meta = {
  title: "TextSkeleton",
  component: TextSkeleton,
  parameters: {
    docs: {
      page: () => (
        <PageLayout
          subtitle="Skeleton for text"
          description="Use this wrapper to generate skeletons for text"
        />
      ),
    },
  },
};

export default meta;

const Template: Story<TextSkeletonProps> = ({ children, ...args }) => (
  <TextSkeleton {...args}>{children}</TextSkeleton>
);

export const Default = Template.bind({});

Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus itaque, ea nihil nesciunt illum mollitia exercitationem.",
  isLoading: true,
};

export const withShortText = Template.bind({});

withShortText.args = {
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  isLoading: true,
};

export const withLongText = Template.bind({});

withLongText.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti pariatur minima velit, odio architecto quisquam assumenda ad eveniet fugit eum? Ipsam minus itaque, ea nihil nesciunt illum mollitia exercitationem.",
  isLoading: true,
};
