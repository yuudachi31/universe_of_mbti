//測試markdown語法的地方
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Container = styled.div`
  width: 400px;
  height: 500px;
  padding: 13px;
  background-color: #c1f5f5;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;
const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  font-size: 17px;
`;

const MarkdownTest = () => {
  const [value, setValue] = useState("");
  const onInputChange = (e) => {
    console.log(JSON.stringify("string: " + e.target.value));

    let aaa = JSON.stringify(e.target.value);
    console.log("parse: " + JSON.parse(aaa));
    setValue(JSON.parse(aaa));
    // setValue(e.target.value)
  };

  return (
    <Container>
      <TextArea
        onChange={(e) => {
          onInputChange(e);
        }}
      />
      <ResultArea>
        <ReactMarkdown source="# Hello">{value}</ReactMarkdown>
      </ResultArea>
    </Container>
  );
};

export default MarkdownTest
