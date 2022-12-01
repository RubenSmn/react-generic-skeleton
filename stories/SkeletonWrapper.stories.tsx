import React from "react";
import { Meta, Story } from "@storybook/react";
import { SkeletonWrapper, SkeletonWrapperProps } from "../src/SkeletonWrapper";
import PageLayout, { usePageContext } from "./components/PageLayout";

const meta: Meta = {
  title: "Components/SkeletonWrapper",
  component: SkeletonWrapper,
  argTypes: {
    isLoading: {
      table: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <PageLayout
          subtitle="Wrapper to generate skeletons"
          description="Use this wrapper to generate skeletons for the child components"
        />
      ),
    },
  },
};

export default meta;

const Template: Story<SkeletonWrapperProps> = ({ children, ...args }) => {
  const { isLoading } = usePageContext();
  return (
    <SkeletonWrapper {...args} isLoading={isLoading}>
      {children ? (
        children
      ) : (
        <>
          <h1
            style={{
              marginBlock: 12,
            }}
          >
            Header 1
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            illo ut a, sed similique sequi recusandae unde labore ad! Soluta sit
            possimus ullam eum doloribus natus! Deleniti minus odio ex?
          </p>
        </>
      )}
    </SkeletonWrapper>
  );
};

export const Default = Template.bind({});

Default.args = {
  isLoading: true,
};

export const withList = Template.bind({});

withList.args = {
  isLoading: true,
  children: (
    <>
      <h2
        style={{
          marginBlock: 8,
        }}
      >
        This is a list
      </h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  ),
};
