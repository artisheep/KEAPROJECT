// PreviewListItem.js
import React, { useState } from "react";
import styled from "styled-components"; 
import { useNavigate } from "react-router-dom"; 
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from '../data.json';   

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px; 
  background: white; 
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PreviewListItem(props) {

    const [answer, setAnswer] = useState("");
    const { post } = props; 
  
    return (
      <Wrapper><TitleText>

      {data.findIndex((item) => item.id === post.id) +1+
        "번째 질문 - 서술형 " } 
        
        <div><p>

         
{post.contents[0].question }
</p> </div> 
    </TitleText>
    
        <TextInput
          height={20}
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
            
          console.log(post) 
          post.contents.splice(0, 1);
          post.contents.push({"question": post.contents[0] , "answer": ""}) 
          console.log(data); 
          }}
        /> 
      </Wrapper>
    );
}

export default PreviewListItem;
