import React, {useState}from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../data.json'; 
import TextInput from "../ui/TextInput";
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
function MainPage(props)
{
         
    const [title, setTitle] = useState(""); 
    const [content, setContent] = useState(""); 
     
    const valData = Math.max(...data.map(post => post.id)) + 1>-1?Math.max(...data.map(post => post.id)) + 1:0;
const navigate = useNavigate();
return(
        
<Wrapper>
        
    <Wrapper>
    <Container> 
      <div>
      <Button title="Write" onClick={(e) => {
        data.push({"id": valData ,"content" : "write" , "contents":  []});  
 
        navigate("/"); 
    }} />
    <Button title="Select" onClick={(e) => {
        data.push({"id": valData ,"content" : "select" , "contents":  []});  
        navigate("/"); 
    }} />
    <Button title="미리보기 화면으로 가기" onClick={(e) => {
      console.log(data)
        navigate("/preview"); 
    }} />
      </div> 
    </Container>
    </Wrapper>
 <Container>  
        <PostList posts={data}  />
</Container>
</Wrapper>
);}
export default MainPage; 