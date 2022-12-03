import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  SkeletonProvider,
  SkeletonProviderProps,
} from "../src/SkeletonProvider";
import PageLayout, { usePageContext } from "./components/PageLayout";
import { Default as ImageSkeleton } from "./ImageSkeleton.stories";

const meta: Meta = {
  title: "Components/SkeletonProvider",
  component: SkeletonProvider,
  parameters: {
    docs: {
      page: () => (
        <PageLayout
          subtitle="Context provider for the skeletons"
          description="Use this wrapper around your app to provide a custom configuration for you skeletons"
        />
      ),
    },
  },
};

export default meta;

const Template: Story<SkeletonProviderProps> = ({ ...args }) => {
  const { isLoading } = usePageContext();
  return (
    <SkeletonProvider {...args}>
      <ImageSkeleton isLoading={isLoading} />
    </SkeletonProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
