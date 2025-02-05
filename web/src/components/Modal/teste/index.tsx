import { JSX, useState } from "react";
import styled from "styled-components";

type ContentType = "content1" | "content2";

const Button = styled.button<{ color: string }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.color === "blue" ? "#00509e" : "#006400"};
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 200px;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function ButtonContentTransition(): JSX.Element {
  const [activeContent, setActiveContent] = useState<ContentType>("content1");

  const handleTransition = (content: ContentType): void => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.classList.add("fade-out");

      setTimeout(() => {
        setActiveContent(content);
        contentElement.classList.remove("fade-out");
        contentElement.classList.add("fade-in");

        setTimeout(() => {
          contentElement.classList.remove("fade-in");
        }, 100);
      }, 100);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex space-x-4 mb-6">
        <Button color="blue" onClick={() => handleTransition("content1")}>
          Show Content 1
        </Button>
        <Button color="green" onClick={() => handleTransition("content2")}>
          Show Content 2
        </Button>
      </div>

      <ContentContainer id="content">
        {activeContent === "content1" && (
          <Content bgColor="blue">This is Content 1</Content>
        )}

        {activeContent === "content2" && (
          <Content bgColor="green
          ">This is Content 2</Content>
        )}
      </ContentContainer>
    </div>
  );
}


