const funcoesString = require('./string')
jest.mock('./string')
describe('mocks', () => {
  it('retorna caixa baixa', () => {
  funcoesString.caixaAlta.mockImplementation(a => a.toLowerCase());
  expect(funcoesString.caixaAlta('SS')).toBe('ss')
  expect(funcoesString.caixaAlta).toHaveBeenCalled()
  expect(funcoesString.caixaAlta).toHaveBeenCalledTimes(1)
  expect(funcoesString.caixaAlta).toHaveBeenCalledWith('SS')
  })
})