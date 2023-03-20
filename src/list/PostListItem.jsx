import React, {useState} from "react";
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

function PostListItem(props) {
  const [question, setTitle] = useState(""); 
  const [answer , setContent] = useState(""); 
  const { post } = props; 
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleText>{data.findIndex(item => item.id === post.id)+"번째 질문 - 서술형"}</TitleText>
      <TextInput height={20} value={question} onChange={(event) => {
        setTitle(event.target.value);
        console.log(data)
      }} />  
      <div style={{ textAlign: "center" }}>
        <Button title="데이터 중간저장" onClick={() => {  
          console.log(post)
          console.log(question +" "+answer)
          post.contents.push({"question": question, "answer": ""}) 
          console.log(data); 

          navigate("/"); 
          // do something with the updated data, such as saving it to a database or updating state
        }} />
        <Button title="질문 삭제하기" onClick={() => {  
          const index = data.findIndex(item => item.id === post.id);
          data.splice(index,1);  
          navigate("/"); 
          // do something with the updated data, such as saving it to a database or updating state
        }} />
      </div> 
    </Wrapper>
  );
}

export default PostListItem;
