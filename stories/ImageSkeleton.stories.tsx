import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  ImageSkeleton,
  ImageSkeletonProps,
} from "../src/skeletons/ImageSkeleton";
import PageLayout, { usePageContext } from "./PageLayout";

const meta: Meta = {
  title: "Components/ImageSkeleton",
  component: ImageSkeleton,
  argTypes: {
    isLoading: {
      description: "If `true`, the skeleton will show.",
      type: "boolean",
    },
    isRound: {
      description: "If `true`, the skeleton will be round.",
      type: "boolean",
    },
    children: {
      description: "`HTMLImageElement`",
      type: "function",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <PageLayout
          subtitle="Skeleton for images"
          description="Use this wrapper to generate skeletons for images"
        />
      ),
    },
  },
};

export default meta;

const Template: Story<ImageSkeletonProps> = ({ ...args }) => {
  const { isLoading } = usePageContext();
  return (
    <ImageSkeleton {...args} isLoading={isLoading}>
      <img
        height={160}
        src={
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        }
      />
    </ImageSkeleton>
  );
};

export const Default = Template.bind({});

Default.args = {
  isLoading: true,
  isRound: false,
};

export const withRound = Template.bind({});

withRound.args = {
  isLoading: true,
  isRound: true,
};

export const withPlaceholder = Template.bind({});

withPlaceholder.args = {
  isLoading: true,
  showPlaceholder: true,
};
