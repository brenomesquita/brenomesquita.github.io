const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
      },500)
    });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

it('testa se foi encontrado', () => {
  expect.assertions(1)
  return getUserName(4).then(user => expect(user).toBe('Mark'))
});

it('testa se nao foi encontrado', () => {
  expect.assertions(1)
  const numero = 1
  return getUserName(numero).catch(error =>expect(error).toEqual({ error: `User with ${numero} not found.` }))
});

it('testa se foi encontrado com async/await', async () => {
  expect.assertions(1)
  const name = await getUserName(4)
  return expect(name).toBe('Mark')
});

it('testa se nao foi encontrado com async/await', async () => {
  expect.assertions(1)
  const numero = 1
  try {
    await getUserName(numero)
  } catch (error) {
    return expect(error).toEqual({ error: `User with ${numero} not found.` })
  };
});

it('testa se foi encontrado com resolves/rejects', () => {
  expect.assertions(1)
  return expect(getUserName(4)).resolves.toBe('Mark')
});

it('testa se nao foi encontrado com resolves/rejects', () => {
  expect.assertions(1)
  const numero = 1
  return expect(getUserName(numero)).rejects.toEqual({ error: `User with ${numero} not found.` });
});

