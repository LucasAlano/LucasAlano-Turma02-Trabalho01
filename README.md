# JEST Unit Tests

## Continuous Integration

[![Build and Tests](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml)  
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_unit-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_unit-tests-jest)

Este projeto utiliza **Jest** para testes unitários e está integrado ao **GitHub Actions** e **SonarCloud** para automação de testes e análise contínua da qualidade do código.

## Requisitos

- **Node.js** (versão >= 20.x)
- NPM instalado

## Como executar

Siga os passos abaixo para rodar o projeto:

1. Install [Node JS](https://nodejs.org/) (version >= 20.x)
2. Run `npm install` to install all the project dependencies
3. Run `npm run test` to execute the entire test suite
4. Run `npm run coverage` to execute the entire test suite with coverage

Todos os artefatos de execução podem ser encontrados em `./coverage.` Se você quiser remover esses arquivos, execute `npm run clean`

## Project Structure
</br>
<ul>
    <li>src: Pasta de Códigos</li>
    <li>test: Pasta de Testes Unitários</li>
</ul>
