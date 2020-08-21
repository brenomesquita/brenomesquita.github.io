const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  return mysqlx.getSession({
    user: 'root',
    password: 'Current-Root-Password',
    host: 'localhost',
    port: 3000,
    schema: 'CEP_example'
  })
  .then((session) => {
    return session.getSchema('CEP_example');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

module.exports = connection;