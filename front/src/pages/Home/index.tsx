import React from 'react';

import { Container, Button } from './styles';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Button onClick={() => history.push('/votacao')}>Entrar na votação</Button>
    </Container>
  );
}

export default Home;
