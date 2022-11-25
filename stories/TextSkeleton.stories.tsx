import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextSkeleton, TextSkeletonProps } from "../src/skeletons/TextSkeleton";

const meta: Meta = {
  title: "TextSkeleton",
  component: TextSkeleton,
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

export const Short = Template.bind({});

Short.args = {
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  isLoading: true,
};

export const Long = Template.bind({});

Long.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti pariatur minima velit, odio architecto quisquam assumenda ad eveniet fugit eum? Ipsam minus itaque, ea nihil nesciunt illum mollitia exercitationem.",
  isLoading: true,
};
