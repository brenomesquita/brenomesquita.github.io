const fs = require('fs').promises;
const path = require('path');
const app = require('express');
const router = app.Router();

const read = async () => {
  const perso = await fs.readFile(path.resolve(__dirname, '.', 'simpsons.json'));
  return JSON.parse(perso.toString('utf-8'));
};

const write = async (content) => {
  fs.writeFile(path.resolve(__dirname, '.', 'simpsons.json'),
  JSON.stringify(content),
  (err) => {
    if(err) throw err
  });
};

router.get('/', async (request, response) => {
  const result = await read();
  response.status(200).send(result)
});

router.get('/:id', async (request, response) => {
  const results = await read();
  const filters = await results.find(el => el.id === request.params.id);
  if(filters) {
    return response.status(200).send(filters);
  }
  response.status(404).json({ message: "endpoint does not exist! sorry )':" });
});

router.post('/:id/:name', async (request, response) => {
  const id = request.params.id;
  const name = request.params.name;
  if (!id || !name) return response.status(400);
  const results = await read();
  const filters = results.some(el=>el.id===id);
  if(!filters && id === 'number') {
    const neww = [...results, { id, name }];
    await write(neww)
    response.status(200).json({ message: "character created!" });
  }
  response.status(404).json({ message: "endpoint does not exist! sorry )':" });
});

module.exports = router;