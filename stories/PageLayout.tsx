import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";

export interface PageLayoutProps {
  subtitle?: string;
  description?: string;
}

const PageLayout = ({ subtitle, description }: PageLayoutProps) => {
  return (
    <>
      <Title />
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
      <Primary />
      <ArgsTable />
      <Stories />
    </>
  );
};

export default PageLayout;
