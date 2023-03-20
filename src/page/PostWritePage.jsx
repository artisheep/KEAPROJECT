import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; 
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from '../data.json';   

const Wrapper = styled.div`
padding: 16px;
width: calc(100% - 32px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Container = styled.div`
width: 100%;
max-width: 720px;
& > * {
:not(:last-child) {
margin-bottom: 16px;
}
}
`;

const saveJson = async () => {
    try {
      const json = JSON.stringify(data);
      const fileHandle = await window.showSaveFilePicker();
      const writableStream = await fileHandle.createWritable();
      await writableStream.write(json);
      await writableStream.close();
    } catch (error) {
      console.error(error);
    }
  };
function PostWritePage(props) { 
    const navigate = useNavigate();
    const [title, setTitle] = useState(""); 
    const [content, setContent] = useState(""); 
    const valData = Math.max(...data.map(post => post.id)) + 1;
    return (
    <Wrapper>
    <Container>
    <TextInput height={20} value={title}
    onChange={(event) => {
    setTitle(event.target.value); }} />
    <TextInput height={480} value={content}
    onChange={(event) => {
    setContent(event.target.value); }} />
    <Button title="글 작성하기" onClick={(e) => { 
        data.push({"id": valData, "title":title ,"content" : content , "comments":  []}); 
        saveJson();
     navigate("/post/"+valData); 
    
    }} />
    </Container>
    </Wrapper>
    ); }
export default PostWritePage;