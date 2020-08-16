import styled, { keyframes } from 'styled-components';

export const expandWidth = (width: number) => keyframes`
  from { width: 0; }
  to { width: '${width}%'; }
`;

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
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 1em;
`;

export const Participante = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: none;
  width: 350px;
  height: 400px;
`;

export const ParticipanteImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ParticipanteName = styled.span`
  margin-top: -40px;
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  z-index: 3;
`;


export const Button = styled.button`
  background: #06aa48;
  color: #FFF;
  border-radius: 4px;
  border-color: #06aa48;
  user-select: none;
  width: 20%;
  min-height: 60px;
  margin: 25px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  display: flex;

  span {
    font-weight: bold;
    font-size: 18px;
    font-family: opensans-bold,Helvetica Neue,Helvetica,sans-serif;
  }

  svg {
    margin-left: 5px;
    height: 25px;
    width: 25px;
  }

  :hover {
    border-color: #068a48;
    background: #068a48;
  }

  :disabled {
    border-color: grey;
    background: grey;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 80%;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    position: absolute;
    border-radius: 4px;
    height: 100%;
    background-color: #4CAF50;
    align-self: flex-start;
    animation: ${expandWidth(100)} 0.5s ease-in;
  }

  span {
    z-index: 1;
    font-size: 1.5rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
