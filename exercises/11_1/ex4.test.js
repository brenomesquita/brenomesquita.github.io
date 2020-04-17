const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
    
it('resolves', async () => {
  const URL = 'https://api.github.com/users/tryber/repos'
  expect.assertions(2)
  await expect(getRepos(URL)).resolves.toContain('sd-01-block22-project-queries-unite');
  await expect(getRepos(URL)).resolves.toContain('sd-01-week19-recipes-app-3');
});
