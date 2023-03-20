import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../data.json";

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

const AnswerWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerInput = styled(TextInput)`
  margin-bottom: 8px;
`;

function PreviewSelect(props) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const { post } = props;
  const navigate = useNavigate();

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };
 

  const handleDeleteAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers.splice(index, 1);
    setAnswers(newAnswers);
  };
 

  const handleSaveQuestion = () => {
    const index = data.findIndex((item) => item.id === post.id);
    const updatedPost = {
      ...post,
      question,
      contents: answers.map((content, index) => ({ id: index, content })),
    };
    data.splice(index, 1, updatedPost);
    navigate("/");
  };

  return (
    <Wrapper>
      <TitleText>
        {data.findIndex((item) => item.id === post.id) + 1 + "번째 질문 - 선택형"} 
        <div></div>
{post.question}
      </TitleText>
 

      <AnswerWrapper>
        {post.contents.map((answer, index) => (

              
          <div key={index}>
            {answer.content} 
            <Button title="선택" onClick={() => handleDeleteAnswer(index)} />
          </div>
        ))} 
      </AnswerWrapper> 
    </Wrapper>
  );
}

export default PreviewSelect;
