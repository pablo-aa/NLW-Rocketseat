<h1 align="center" width="5px" height="5px" background-color="">
 <img src="/.github/NLW1.png"  />
</h1>

# 🚀  NLW-Rocketseat
![AUR](https://img.shields.io/badge/-%3C%2F%3E-%23ea004f)
![AUR](https://img.shields.io/badge/-Web-%231a1a1a)
![AUR](https://img.shields.io/badge/-Mobile-%23301934)
### Primeira edição da Rocketseat Next Level Week

## 🖥️ Projeto

Inspirado na semana do Meio ambiente foi desenvolvido a "Ecoleta", uma aplicação que tem por objetivo conectar produtores de resíduos a empresas ou locais que necessitam deste material.

<img src="/.github/Ecoleta1.png"  />

Acesso ao projeto: <a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/"> Figma </a>

## ℹ️ Como Usar?
 🛠  Yarn, Node.js, Expo
 
 Comandos utilizados: 
 
<pre><code>

📂 mobile (Mobile)
  # Instalar dependências
  $ yarn install
  
  # Rodar expo
  $ expo start
  
📂 server (Back-end)

  # Instalar dependências
  $ yarn install

  # Executar migrate
  $ yarn knex:migrate

  # Executar seed
  $ yarn knex:seed

  # Rodar servidor
  $ yarn dev

  localhost: 3333
 
📂 web (Front-end)
  # Instalar dependências
  $ yarn install
  
  # Rodar Front
  $ yarn start
  
</code></pre>

## 📝  Desenvolvimento das aulas

- #### Aula 1 

  -  Explicação sobre a aplicação "Ecoleta Booster" (ReactJs + React Native)
  -  Implementação inicial do Back-end utilizando node e front-end utilizando React
  -  Explicação inicial sobre a utilização do React native e Expo
  
- #### Aula 2 

  -  Implementação do back-end usando SQLite como banco de dados
      -  Utilização do método (N-N) para relação das tabelas
  -  Knex.js como framework para manipular SQL
      -  Utilização de Migrations (estruturação do banco de dados) e seeds (criação de tabelas pré determinadas)
      -  Utilização de transaction
  -  Utilização do CORS para filtrar URLs de acesso a aplicação
  -  Estruturação de resursos do "Ecoleta"
      -  Listagem de itens para coleta
      -  Cadastro dos pontos de coleta
      -  Filtragem dos pontos de coleta
      -  Acesso a pontos específicos de coleta
      
- #### Aula 3
 
  -  Implementação do front-end utilizando React.js
      -  Noções sobre componentização, estados, hooks e estruturas básicas
  - Bibliotecas relevantes utilizadas:
      -  React-router-dom para organização das rotas
      -  Leaflet e react-leaflet para utilização de mapas
      -  Axios para conexão com back-end
  
- #### Aula 4

  - Implementação do mobile utilizando React Native
     -  Noções sobre flexBox, estados, hook e estruturas básicas
  - Bibliotecas relevantes utilizadas:
      - React navigation para o controle de rotas
      - React-native-maps para lidar com mapas na aplicação
      - React-native-svg para lidar com imagens com extensão .svg
      - Axios para lidar com back-end
      - Expo-mail-composer para envio de email para pontos de coleta
   - {Linking} do react-native para envio de mensagem no Whatsapp
      
      
 __OBS__: 

     Adicionalmente foi implementado um seletor de lugares na página Home para facilitar a busca e evitar erros. 
     A implementação foi análoga ao sistema de busca feito na 📂 web.

    - Recursos utilizados:

     -  react-native-picker-select para contrução do seletor
     -  API do IBGE
      
 - #### Aula 5
   
   - Melhorias na aplicação
      - 📂 server
        - Configuração do upload de imagens utilizando Multer para gerenciar esse armazenamento
        - Adição da biblioteca Celebrate para verificação de dados do formulário de cadastro
      - 📂 web
        - Upload de imagens utilizado React-dropzone
        
        obs: Mudança no formato de transferência de dados (para suporte de imagens): JSON -> Multipart 
      - 📂 mobile
        - Adição da estrutura de image_url para reconhecer o upload de imagens
        
        
## :memo: Liceça

Esse projeto está sobre a licença do MIT. Acesse a [LICENSE](https://github.com/pablo-aa/NLW-Rocketseat/blob/master/LICENSE) para detalhes.


Feito por ![AUR](https://img.shields.io/badge/-%3Cpablo%2F%3E-%23ea004f)

:wave: [Contato!](https://www.linkedin.com/in/pabloArruda/)
      
 
      
