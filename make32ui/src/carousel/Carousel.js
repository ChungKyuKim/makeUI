import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { CAROUSEL_DATA } from "./CAROUSEL_DATA";

const Carousel = () => {
  const [currentSlide, setCurrentSliide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = 2;

  const nextButton = () => {
    if (currentSlide >= totalSlides) {
      setCurrentSliide(0);
    } else {
      setCurrentSliide(currentSlide + 1);
    }
  };

  const prevButton = () => {
    if (currentSlide === 0) {
      setCurrentSliide(totalSlides);
    } else {
      setCurrentSliide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Wrapper>
      <Container ref={slideRef}>
        <CarouselImg src="./img/나.jpg" />
        <CarouselImg src="./img/WKWKWK.jpeg" />
        <CarouselImg src="./img/나커버.jpeg" />
      </Container>
      <ButtonWrapper>
        <Button onClick={prevButton}>이전</Button>
        <Button onClick={nextButton}>다음</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 auto;
  border: red solid 1px;
  width: 370px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  width: 370px;
  /* overflow: hidden; */
`;
const CarouselImg = styled.img`
  width: 100%;
  height: 500px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Button = styled.button`
  background-color: white;
  border-radius: 20px;
  border-color: gray;
  margin: 10px;
  width: 60px;
`;

export default Carousel;
