const getCep = require('../services/cepApiRequest');
const connection = require('./connection');

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);

const saveCep = async (cepData) => {
  const { uf, cidade, bairro, logradouro, cep } = cepData;
  const db = await connection();
  const result = await db.getTable('ceps')
  .insert(['uf', 'cidade', 'bairro', 'logradouro', 'cep'])
  .values(uf, cidade, bairro, logradouro, cep)
  .execute();

  return result;
} 


module.exports = {
  saveCep
};