import React from "react";
import styled from "styled-components";
import { useState } from "react";

// const CONTENT_ACCORDION: StyleProps = {};

function Accordion() {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const buttonClick = React.useCallback(
    (event: any) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setOpen(!open);
    },
    [open]
  );
  return (
    <ContentWrapper>
      <Wrapper>
        <TitleAccordion>
          홍설 <Button onClick={buttonClick}>더보기</Button>
        </TitleAccordion>
        <InformaionWrapper ref={parentRef}>
          <Information ref={childRef}>
            홍지은의 강아지이다. 5살이며, 주인의 성격이 사납고 날카롭고 욕을
            잘하는 성격에 반해 온순한 편이다.
            <br /> 주인피셜 수원 최고 귀요미 강아지.
          </Information>
        </InformaionWrapper>
      </Wrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  margin: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid black;
  width: 500px;
  padding: 10px;
`;

const TitleAccordion = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  width: 60px;
  height: 20px;
`;
const InformaionWrapper = styled.div`
  height: 0;
  width: 100%;
  transition: 0.5s ease;
  overflow: hidden;
`;

const Information = styled.div``;

export default Accordion;
