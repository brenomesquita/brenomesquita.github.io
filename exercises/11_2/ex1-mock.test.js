const mrequire= require('../11_2/ex1-mock')
it('retorno 10', () =>{
  mrequire.numerpAleatorio = jest.fn().mockReturnValue(10);
  expect(mrequire.numerpAleatorio()).toBe(10)
  expect(mrequire.numerpAleatorio).toHaveBeenCalled()
  expect(mrequire.numerpAleatorio).toHaveBeenCalledTimes(1)
})
it('recebe dois param e retorna a divisao do primeiro pelo segundo', ()=>{
  mrequire.numerpAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(mrequire.numerpAleatorio(10,5)).toBe(2)
  expect(mrequire.numerpAleatorio).toHaveBeenCalled()
  expect(mrequire.numerpAleatorio).toHaveBeenCalledTimes(1)
  expect(mrequire.numerpAleatorio).toHaveBeenCalledWith(10, 5);
})
describe('ex 3', ()=>{
  it('recebe tres param de retorna e sua mult', ()=>{
  mrequire.numerpAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  expect(mrequire.numerpAleatorio(1,2,3)).toBe(6)
  expect(mrequire.numerpAleatorio).toHaveBeenCalled()
  expect(mrequire.numerpAleatorio).toHaveBeenCalledTimes(1)
  expect(mrequire.numerpAleatorio).toHaveBeenCalledWith(1,2,3)
})
it('reseta e criar uma nova que recebe um param e retorne o dobro', ()=>{
  mrequire.numerpAleatorio.mockReset()
  expect(mrequire.numerpAleatorio).toHaveBeenCalledTimes(0)
  mrequire.numerpAleatorio.mockImplementationOnce((a) => a * a);
  expect(mrequire.numerpAleatorio(2)).toBe(4)
  expect(mrequire.numerpAleatorio).toHaveBeenCalled()
  expect(mrequire.numerpAleatorio).toHaveBeenCalledTimes(1)
  expect(mrequire.numerpAleatorio).toHaveBeenCalledWith(2)
})
})
