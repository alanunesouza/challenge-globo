# Histórico de desenvolvimento

====================
#### Arquitetura

- Pensei inicialmente em criar uma estrutura mais simples possível, mas me senti mais confortável em construir a base das aplicações mais escaláveis, um pouco parecidas com as quais costumo criar, então a aplicação poderia ser mais "enxuta", mas talvez mais "bagunçada"... resolvi dividir um arquivo em N arquivos.

====================
#### Desenvolvimento

- Iniciei com a estrutura e rotas iniciais do lado da API, e posteriormente iniciei o desenvolvimento no site. Depois vi algumas necessidades no lado da API, e fui ajustando de acordo com a necessidade.

====================
#### Layout

- Infelizmente, optei por deixar um layout bem básico, devido ao tempo disponível para concluir o projeto.
- Imagens dos participantes: a ideia inicial é criar uma estrutura de armazenamento de imagens de participantes com Multer, porém isso geraria um tempo de desenolvimento e acabei deixando a imagem de dois participantes somente.


====================
#### Mock

- Queria deixar um mock default do banco, para assim que vocês subirem a aplicação, já estar tudo ok... utizando seeds no TypeORM, mas acabei tendo alguns problemas e não consegui concluir. 

====================
#### Segurança para os votos

- Resolvi utilizar o Captcha do Google v2. A v3 não consegui, devido a aparentemente necessitar de uma key paga. Pensei em utilizar também algum tipo de token automático, para impedir o uso indevido de alguma ferramenta para disparar requests de votos automáticos.

====================
#### Deploy

- A ideia era subir em um ambiente (Heroku por exemplo) ambas aplicações, assim como foi solicitado, mas meu tempo estava acabando, então segui na linha de um passo a passo manual (descrito no README.md).

====================
#### Teste de performance

- A intenção era fazer um teste de disparo de votos com o uso da ferramenta [artillery](https://artillery.io/). Acabei não conseguindo concluir devido ao tempo.

====================
#### Como foi pensada a criação

- Desde o início do projeto, pensei em uma interface pública (votação do BBB), e uma interface privada (destinada aos dirigentes do BBB - para conseguir ver todos os participantes, criar paredões, adicionar e remover participantes, dar início ao paredão, finaliza-lo e conseguir extrair todos os dados necessários do mesmo). A criação das chamadas já estavam quase prontas, faltou criar a dos dados importantes referentes ao paredão, e a criação das interfaces do lado web.
