import React from 'react';

import { Container, Button } from './styles';
import history from '../../services/history';

const Home: React.FC = () => {
  return (
    <Container>
      <Button onClick={() => history.push('/votacao')}>Entrar na votação</Button>
    </Container>
  );
}

export default Home;
