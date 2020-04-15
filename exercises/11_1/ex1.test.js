const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('frase', ()=>{
  expect.assertions(1)
  uppercase('st', t =>{
    expect(t).toEqual('ST')
  })
})