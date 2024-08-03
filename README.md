# Projeto de Automação de Testes com Cypress

Este projeto é uma automação de testes utilizando Cypress para comparar smartphones no site [TudoCelular](https://www.tudocelular.com/compare).

## Pré-requisitos

Para rodar este projeto, você precisa ter o Node.js instalado na sua máquina. Caso não tiver siga as instruções abaixo:

## Instalação do Node.js

### Windows

1. Acesse o site oficial do Node.js: [nodejs.org](https://nodejs.org/)
2. Baixe o instalador para Windows.
3. Execute o instalador e siga as instruções na tela.
4. Após a instalação, abra o terminal do windows e verifique se o Node.js foi instalado corretamente:
   windows + r = abre a aba de executar
   digite: cmd aperte "ENTER"
   depois digite: node -v
5. Irá informar a versão do Node.js instalado.

## Instalação do Cypress
1. Clone o projeto utilizando o comando:git clone (URL_DO_PROJETO)
2. Abra o diretorio clonado no terminal do windows.
3. Instale as dependencias do projeto, utilizando o comando: npm install
4. Instale o cypress utilizando o comando: npm install cypress --save-dev

## Para executar o Cypress
1. Para abrir a interface do Cypress, execute o seguinte comando:
   npx cypress open
2. Selecione o arquivo "comparando_celulares.cy.js" na janela do Cypress.
3. O teste automatizado será executado automaticamente.
4. O resultado do teste será exibido na interface do Cypress.

## OBSERVAÇÃO
   NÃO PODE ALTERAR O NOME DOS SMARTPHONES! CASO ISSO ACONTEÇA A AUTOMAÇÃO NÃO IRÁ CONSEGUIR COMPARAR QUAL CELULAR TEM O MELHOR CUSTO BENEFICIO.
