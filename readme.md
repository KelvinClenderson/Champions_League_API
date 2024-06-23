Claro! Aqui está o `README.md` atualizado com a seção de endpoints:

```markdown
# Champions League API

Essa é uma API criada com os clubs e jogadores da Champions League.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Scripts](#scripts)
- [Dependências](#dependências)
- [DevDependencies](#devdependencies)
- [Autor](#autor)
- [Licença](#licença)

## Instalação

Primeiro, clone o repositório:

```bash
git clone https://github.com/seu-usuario/champions_league_api.git
```

Depois, navegue até o diretório do projeto e instale as dependências:

```bash
cd champions_league_api
npm install
```

## Uso

Para iniciar a API, você pode utilizar os scripts definidos no `package.json`. Veja a seção [Scripts](#scripts) para mais detalhes.

### Iniciar em Modo de Desenvolvimento

```bash
npm run start:dev
```

### Iniciar em Modo de Produção

Primeiro, compile o projeto:

```bash
npm run dist
```

Depois, inicie o servidor:

```bash
npm run start:dist
```

### Iniciar em Modo de Observação

Para iniciar o servidor e recompile automaticamente ao detectar mudanças:

```bash
npm run start:watch
```

## Endpoints

A API fornece os seguintes endpoints:

### Jogadores

- **GET /api/players**
  - Retorna a lista de todos os jogadores.

- **POST /api/players**
  - Adiciona um novo jogador.
  - Exemplo de corpo de requisição:
    ```json
    {
      "name": "Neymar",
      "club": "Barcelona",
      "nacionality": "Brasileiro",
      "position": "Atacante",
      "age": 28,
      "statistics": {
        "overall": 90,
        "pace": 94,
        "shooting": 92,
        "passing": 88,
        "dribbling": 95,
        "defending": 40,
        "physical": 75
      }
    }
    ```

- **GET /api/players/:id**
  - Retorna os dados de um jogador específico pelo ID.

- **DELETE /api/players/:id**
  - Deleta um jogador específico pelo ID.

- **PATCH /api/players**
  - Atualiza os dados de um jogador.
  - Exemplo de corpo de requisição:
    ```json
    {
      "id": 1,
      "name": "Neymar Jr",
      "age": 29
    }
    ```

### Clubes

- **GET /api/clubs**
  - Retorna a lista de todos os clubes.

## Scripts

- `dist`: Compila o código TypeScript em JavaScript utilizando `tsup`.
- `start:dist`: Compila o projeto e inicia o servidor a partir do código compilado.
- `start:dev`: Inicia o servidor no modo de desenvolvimento utilizando `tsx`, lendo variáveis de ambiente do arquivo `.env`.
- `start:watch`: Inicia o servidor em modo de observação utilizando `tsx`, lendo variáveis de ambiente do arquivo `.env`.

## Dependências

- `cors`: ^2.8.5
- `express`: ^4.19.2

## DevDependencies

- `@types/cors`: ^2.8.17
- `@types/express`: ^4.17.21
- `tsup`: ^8.1.0
- `tsx`: ^4.15.6
- `typescript`: ^5.4.5

## Autor

Kelvin Clenderson

## Licença

Este projeto está licenciado sob a Licença ISC.