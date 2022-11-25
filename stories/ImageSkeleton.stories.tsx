import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  ImageSkeleton,
  ImageSkeletonProps,
} from "../src/skeletons/ImageSkeleton";

const meta: Meta = {
  title: "ImageSkeleton",
  component: ImageSkeleton,
  argTypes: {
    isLoading: {
      description: "If `true`, the skeleton will show.",
      type: "boolean",
    },
    round: {
      description: "If `true`, the skeleton will be round.",
      type: "boolean",
    },
    children: {
      description: "`HTMLImageElement`",
      type: "function",
    },
  },
};

export default meta;

const Template: Story<ImageSkeletonProps> = ({ ...args }) => (
  <ImageSkeleton {...args}>
    <img
      height={160}
      src={
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
      }
    />
  </ImageSkeleton>
);

export const Default = Template.bind({});

Default.args = {
  isLoading: true,
  round: false,
};

export const Round = Template.bind({});

Round.args = {
  isLoading: true,
  round: true,
};
