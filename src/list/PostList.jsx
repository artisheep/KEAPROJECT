import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem"; 
import SelectQuestion from "./SelectQuestion";
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
function PostList(props)
{
const { posts}= props; 
return(
<Wrapper>
     { posts.map ( (post, index) =>{ 
        
        if (post.content === "write") {
            return (
              <PostListItem
                key={post.content}
                post={post}
              />
            );
          } else if (post.content === "select") {
            return (
              <SelectQuestion
                key={post.content}
                post={post} 
              />
            );
          }
}

)

    }
</Wrapper>
);
}
export default PostList;