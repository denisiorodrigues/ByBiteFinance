import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova trasnação', () => {
  // Fazer uma chamada HTTP para criar uma nova trensação

  const responseStatusCode = 201

  expect(responseStatusCode).equal(201)
})
