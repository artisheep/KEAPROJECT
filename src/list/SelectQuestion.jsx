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

function SelectQuestion(props) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const { post } = props;
  const navigate = useNavigate();

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleAddAnswer = () => {
    setAnswers([...answers, ""]);
  };

  const handleDeleteAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers.splice(index, 1);
    setAnswers(newAnswers);
  };

  const handleDeleteQuestion = () => {
    const index = data.findIndex((item) => item.id === post.id);
    data.splice(index, 1);
    navigate("/");
  };

  const handleSaveQuestion = () => {
    const index = data.findIndex((item) => item.id === post.id);
    const updatedPost = {
      ...post,
      question,
      contents: answers.map((content, index) => ({ id: index, content })),
    };
    data.splice(index, 1, updatedPost);
    console.log("!!!")
    console.log(post)
    navigate("/");
  };

  return (
    <Wrapper>
      <TitleText>
        {console.log(data)}
        {data.findIndex((item) => item.id === post.id)  +"번째 질문 - 선택형"}
      </TitleText>

      <TextInput
        height={20}
        value={question}
        onChange={(event) => {
          setQuestion(event.target.value);    
          handleSaveQuestion();
          console.log(data)
          console.log(data)
          console.log(question)
        }}
      />

      <AnswerWrapper>
        {answers.map((answer, index) => (
          <div key={index}>
            <AnswerInput
              value={answer}
              onChange={(event) => {handleAnswerChange(index, event)
                                handleSaveQuestion();
                            console.log(data)
                            
            }}
            />
            <Button title="삭제" onClick={() => handleDeleteAnswer(index)} />
          </div>
        ))}
        <Button title="추가" onClick={handleAddAnswer} />
      </AnswerWrapper>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <Button title="저장" onClick={handleSaveQuestion} />
        <Button title="삭제" onClick={handleDeleteQuestion} /> 
      </div>
    </Wrapper>
  );
}

export default SelectQuestion;
