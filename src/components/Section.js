import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';

function Section({
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap backgroundImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
  background: url(${({ backgroundImage }) => `images/${backgroundImage}`})
    no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //   margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0.2rem;
  }
`;

const LeftButton = styled.button`
  cursor: pointer;
  background-color: rgba(23, 26, 32, 0.8);
  height: 3.5rem;
  width: 20rem;
  color: white;
  border-radius: 10rem;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: none;
  margin: 1rem;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  height: 4rem;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  fill: #000;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
