## ByBiteFinance - Pojeto para logistica de bikes

# Descrição
Um projeo para aplicar os conhecimento do curso de nodejs da rocketseat

# Frameworks

| Nome | Descrição | Link |
| ------:| -----------:| -----------:|
| fastify   | Micro framework para requisições http. Alternativa ao express | [fastify.io](https://www.fastify.io/) |
| @fastify/cookie | Facilita o trabalho com cookies no fastify.  | [fastify.io](https://www.fastify.io/) |
| knex |  É um SQL query builder. Não chega a ser um ORM | [knexjs.org](https://knexjs.org/) |
| sqlite3 | Drive para acessar o banco de dados sqlite. | [github.com/TryGhost/node-sqlite3](https://github.com/TryGhost/node-sqlite3) |
| dotenv | Configurar as variáveis de ambiente. | [github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) |
| zod | Validação para qualquer tipo de dados (Variáeis de amviente e dados que vem do servidor).  | [github.com/colinhacks/zod](https://github.com/colinhacks/zod) |
| vitest | Framework para execução de teste. Ele é mais raído que ojeste e não pecisa de muita configuração  | [vitest.dev](https://vitest.dev/) |
| supertest | Framework de teste para testes de requisições HTTP | [github.com/ladjs/supertest](https://github.com/ladjs/supertest#readme) |
| @types/supertest | Data types para o supertest funcionar com o typescript pois ela fi desenvolvida 100% com javascript. É mantida pela comunidade | [github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) |
| tsup |  Coverte o typescript para javascript de maneira rápida | [tsup.egoist.dev](https://tsup.egoist.dev/) |

## REGRAS

# RF - Requisitos Funcionais

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter resumo da conta;
- [x] O usuário deve poder listas todas as transações que ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

# RN - Regra de Negócio

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [x] Deve ser possível identificar os usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;

# RNF - Requisito Não Funcional

- Não possui


## Tips And Tricks

Corrigir o erro do eslint nas linhas do DRLF

```
git config --global core.autocrlf false
```