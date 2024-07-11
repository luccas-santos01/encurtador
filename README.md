# Encurtador de URL

## Descrição

O componente EncurtadorDeURL é uma aplicação React que permite aos usuários encurtar URLs de forma simples e eficaz. Os usuários podem inserir uma URL para encurtamento, copiar a URL encurtada para a área de transferência ou limpar o campo de entrada para uma nova operação. Este componente faz uso de um custom hook useShortenUrl para gerenciar o estado e a lógica de encurtamento de URLs.

## Ferramentas Utilizadas

- Vite: Utilizado como ferramenta de build e servidor de desenvolvimento
- Reac: Biblioteca JavaScript para construção de interfaces de usuário.
- TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
- SweetAlert2: Biblioteca para exibição de alertas estilizados e responsivos.
- Fetch API: Utilizada para realizar a requisição HTTP POST para o serviço de encurtamento de URLs.

## Custom Hook useShortenUrl

O hook useShortenUrl é responsável pela lógica de encurtamento de URLs, incluindo a validação da URL fornecida pelo usuário, o envio da requisição para o serviço de encurtamento de URLs(manyapis), e o gerenciamento dos estados de carregamento, sucesso e erro. Este hook utiliza a Fetch API para comunicação com o serviço de encurtamento de URLs e SweetAlert2 para exibição de feedback visual ao usuário em casos de erro ou validação.

## Instalação do Projeto

1. Clone o Repositório: Clone o repositório do projeto para sua máquina local.
2. Instale as Dependências: Navegue até o diretório do projeto clonado e execute o comando npm install
3. Execute o Projeto: Após a instalação das dependências, execute o comando npm start para iniciar o servidor de desenvolvimento.

## Usabilidade

Para utilizar o componente EncurtadorDeURL, o usuário deve:

1. Inserir a URL que deseja encurtar no campo de entrada.
2. Clicar no botão "Encurtar" para processar a URL.
3. Após o encurtamento, a URL encurtada será exibida no mesmo campo de entrada.
4. O usuário pode então copiar a URL encurtada para a área de transferência clicando no botão "Copiar".
5. Caso deseje encurtar uma nova URL, o usuário pode clicar no botão "Apagar" para limpar o campo de entrada.

## Deploy

O deploy da aplicação encontra-se neste [link](https://luccas-santos01.github.io/encurtador/)
