import { FastifyInstance } from 'fastify'
import crypto from 'node:crypto'
import knex from 'knex'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('transaction', async () => {
    const transactions = await knex('transactions')
      .where('amount', 100)
      .select('*')

    return transactions
  })

  app.post('/hello', async () => {
    const transaction = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transção de teste',
        amount: 1000,
      })
      .returning('*')

    return transaction
  })
}
