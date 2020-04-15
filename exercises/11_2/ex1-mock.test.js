const numerpAleatorio = () => Math.floor(Math.random()*101)
it('retorno 10', () =>{
  const numerpAleatorio = jest.fn().mockReturnValue(10);
  expect(numerpAleatorio()).toBe(10)
  expect(numerpAleatorio).toHaveBeenCalled()
  expect(numerpAleatorio).toHaveBeenCalledTimes(1)
})
it('recebe dois param e retorna a divisao do primeiro pelo segundo', ()=>{
  const numerpAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(numerpAleatorio(10,5)).toBe(2)
  expect(numerpAleatorio).toHaveBeenCalled()
  expect(numerpAleatorio).toHaveBeenCalledTimes(1)
  expect(numerpAleatorio).toHaveBeenCalledWith(10, 5);
})
describe('ex 3', ()=>{
  it('recebe tres param de retorna e sua mult', ()=>{
  const numerpAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  expect(numerpAleatorio(1,2,3)).toBe(6)
  expect(numerpAleatorio).toHaveBeenCalled()
  expect(numerpAleatorio).toHaveBeenCalledTimes(1)
  expect(numerpAleatorio).toHaveBeenCalledWith(1,2,3)
})
it('reseta e criar uma nova que recebe um param e retorne o dobro', ()=>{
  numerpAleatorio.mockReset()
  //jest.fn().mockImplementationOnce((a) => a * a);
  //expect(numerpAleatorio(2)).toBe(4)
  //expect(numerpAleatorio).toHaveBeenCalled()
  expect(numerpAleatorio).toHaveBeenCalledTimes(0)
})
})
