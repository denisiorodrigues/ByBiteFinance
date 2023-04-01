## ByBike - Pojeto para logistica de bikes
# Descrição


# Frameworks
| Nome | Descrição | Link |
| ------:| -----------:| -----------:|
| fastify   | Micro framework para requisições http. Alternativa ao express | [fastify.io](https://www.fastify.io/) |
| knex |  É um SQL query builder. Não chega a ser um ORM | [knexjs.org](https://knexjs.org/) |
| sqlite3 | Drive para acessar o banco de dados sqlite. | [github.com/TryGhost/node-sqlite3](https://github.com/TryGhost/node-sqlite3) |
| dotenv | Configurar as variáveis de ambiente. | [github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) |
| zod | Validação para qualquer tipo de dados (Variáeis de amviente e dados que vem do servidor).  | [github.com/colinhacks/zod](https://github.com/colinhacks/zod) |

## REGRAS

# RF - Requisitos Funcionais

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter resumo da conta;
- [x] O usuário deve poder listas todas as transações que ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

# RN - Regra de Negócio

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [ ] Deve ser possível identificar os usuário entre as requisições;
- [ ] O usuário só pode visualizar transações o qual ele criou;

# RNF - Requisito Não Funcional

