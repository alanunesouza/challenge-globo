import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { MdRefresh } from 'react-icons/md';

import { Container, Content, Participante, ParticipanteImg, ParticipanteName, Title, Button, ProgressBar, Row } from './styles';

import masculinoPNG from '../../assets/images/masculino.png';
import femininoPNG from '../../assets/images/feminino.png';

interface Participante {
  nome: string,
  id: string,
}

interface Paredao {
  participantes: Array<Participante>,
  ativo: boolean,
}

interface LocationState {
  data: {
    paredao: Paredao,
    resultado: Array<{ participante: Participante, qtdVotos: number }>,
    totalDeVotos: number,
  }
}

const Resultado: React.FC = () => {
  const [resultado, setResultado] = useState<Array<{ participante: Participante, qtdVotos: number }>>();
  const [totalVotos, setTotalVotos] = useState<number>(0);

  const history = useHistory();
  const location = useLocation<LocationState>();

  useEffect(() => {
    const state  = location.state?.data;

    console.log(state)

    if (state) {
      setResultado(state.resultado);
      setTotalVotos(state.totalDeVotos);
    }
  }, [location])

  return (
    <Container>
       <Title>Resultado Parcial</Title>

      <Row>
        {resultado?.map((r, index) => (
          <Content key={r.participante.id}>
            <Participante disabled >
              <ParticipanteImg src={index % 2 ? femininoPNG : masculinoPNG} />
              <ParticipanteName>{r.participante.nome}</ParticipanteName>
            </Participante>

            <ProgressBar>
              <span>{((r.qtdVotos / totalVotos) * 100).toFixed(2)} %</span>
              <div style={{ width: `${((r.qtdVotos / totalVotos) * 100)}%`}} />
            </ProgressBar>

          </Content>
        ))}
      </Row>

      <Button onClick={() => history.push('/votacao')}>
        <span>Votar novamente</span>
        <MdRefresh />
      </Button>
    </Container>
  );
}

export default Resultado;
