const fetch = require('node-fetch');

const headers = {
  Accept: 'application/json',
};

const getCep = async (cep) => {
  const la = await fetch(`http://cep.la/${cep}`, { headers })
  const cep = await la.json()

  if(Array.isArray(cep) && cep.length===0) {
    throw new Error('CEP não encontrado')
  }

  return cep;
};


module.exports = {
  getCep
}