import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import api from '../../services/api';
import { Container, Content, Participante, ParticipanteImg, ParticipanteName, QuestionTitle, Button } from './styles';

import masculinoPNG from '../../assets/images/masculino.png';
import femininoPNG from '../../assets/images/feminino.png';
import { useHistory } from 'react-router-dom';

interface Participante {
  nome: string,
  id: string,
}

interface Paredao {
  participantes: Array<Participante>,
  ativo: boolean,
}

const Votacao: React.FC = () => {
  const [paredao, setParedao] = useState<Paredao | null>(null);
  const [activeButton, setActiveButton] = useState<Boolean>(false);
  const [participanteSelecionado, setParticipanteSelecionado] = useState<Participante>();

  const history = useHistory();

  useEffect(() => {
    api.get('/paredoes')
      .then(response => setParedao(response.data))
      .catch(err => console.log(err));
  }, [])

  const handleSubmit = () => {
    const body = {
      id_participante: participanteSelecionado?.id
    };

    api.post('/votos', body)
      .then(response => history.push({ pathname:'/resultado', state: { data: response.data } }))
  }

  return (
    <Container>
      {paredao?.participantes && ( <QuestionTitle> Quem você quer eliminar?</QuestionTitle>)}

      <Content>
        {paredao ? paredao?.participantes?.map((participante, index) => (
          <Participante
            key={participante.id}
            onClick={() => setParticipanteSelecionado(p => ({ ...participante }))}
            active={participante.id === participanteSelecionado?.id}
          >
            <ParticipanteImg src={index % 2 ? femininoPNG : masculinoPNG} />
            <ParticipanteName>{participante.nome}</ParticipanteName>
          </Participante>
        )) : (
          'Paredão ainda está sendo formado. Tente mais tarde.'
        )}
      </Content>

      {participanteSelecionado && (
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={() => setActiveButton(true)}
        />
      )}

      <Button disabled={!activeButton} onClick={handleSubmit}>Votar</Button>
    </Container>
  );
}

export default Votacao;
