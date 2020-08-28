import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Button } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Button onClick={(): void => history.push('/votacao')}>Entrar na votação</Button>
    </Container>
  );
};

export default Home;
