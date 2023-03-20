// PreviewList.js
import React from "react";
import styled from "styled-components";
import PreviewListItem from "./PreviewListItem"; 
import PreviewSelect from "./PreviewSelect";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PreviewList(props) {
  const { posts } = props;  
  return (
    <Wrapper>
      {posts.map((post, index) => { 
        if (post.content === "write") {
          return (
            <PreviewListItem
              key={post.content}
              post={post}
              question={post.content.question} // Pass question as a prop
            />
          );
        } else if (post.content === "select") {
          return (
            <PreviewSelect
              key={post.content}
              post={post}
            />
          );
        }
      })}
    </Wrapper>
  );
}

export default PreviewList;
