import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionTitle = styled.h1`
  margin: 1em;
`;

export const Participante = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
  border-radius: 3px;
  border: 2px solid ${props => props.active ? '#06aa48' : 'rgba(0, 0, 0, 0.2)'};
  overflow: hidden;
  background: none;

  width: 350px;
  height: 400px;

  :hover {
    span {
      font-size: 20px;
    }
  }
`;

export const ParticipanteImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform .5s ease;

  :hover {
    transform: scale(1.1);
  }
`;

export const ParticipanteName = styled.span`
  margin-top: -40px;
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  z-index: 3;
  transition: transform .5s ease;
`;


export const Button = styled.button`
  background: #06aa48;
  color: #FFF;
  border-radius: 4px;
  border-color: #06aa48;
  font-weight: bold;
  font-size: 18px;
  font-family: opensans-bold,Helvetica Neue,Helvetica,sans-serif;
  user-select: none;
  width: 15%;
  min-height: 60px;
  margin: 25px;

  :hover {
    border-color: #068a48;
    background: #068a48;
  }

  :disabled {
    border-color: grey;
    background: grey;
  }
`;
