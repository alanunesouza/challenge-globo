import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #FFF;
  height: 70px;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  font-weight: 500;
  font-size: 24px;
`;

export const Button = styled.button`
  background: #0669de;
  color: #FFF;
  border-radius: 4px;
  border-color: #0669de;
  font-weight: 500;
  font-size: 18px;
  font-family: opensans-bold,Helvetica Neue,Helvetica,sans-serif;
  user-select: none;
  width: 15%;
  height: 60px;

  :hover {
    border-color: #0649de;
    background: #0649de;
  }
`;
