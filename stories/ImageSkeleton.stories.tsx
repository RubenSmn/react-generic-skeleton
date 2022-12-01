import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  ImageSkeleton,
  ImageSkeletonProps,
} from "../src/skeletons/ImageSkeleton";
import PageLayout, { usePageContext } from "./components/PageLayout";

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
        src="https://github.com/github/media/blob/master/octocats/octocat.png?raw=true"
        height={160}
        alt="github-octocat"
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
