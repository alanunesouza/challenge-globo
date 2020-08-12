import React, { useEffect } from 'react';

// import { Container } from './styles';
import api from '../../services/api';

const Votacao: React.FC = () => {

  useEffect(() => {
    api.get('/paredoes')
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  })

  return <div />;
}

export default Votacao;
