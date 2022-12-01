import React, { createContext, useContext, useState } from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Heading,
} from "@storybook/addon-docs";

export interface PageLayoutProps {
  subtitle?: string;
  description?: string;
}

const PageContext = createContext({ isLoading: true });

const PageLayout = ({ subtitle, description }: PageLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  return (
    <PageContext.Provider value={{ isLoading }}>
      <Title />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Subtitle>{subtitle}</Subtitle>
        <button
          style={{
            backgroundColor: "#CC5",
            border: "none",
            borderRadius: 8,
            padding: 12,
            cursor: "pointer",
          }}
          onClick={toggleLoading}
        >
          Toggle Loading
        </button>
      </div>
      <Description>{description}</Description>
      <Primary />
      <Heading>Props</Heading>
      <ArgsTable />
      <Stories />
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  return useContext(PageContext);
};

export default PageLayout;
