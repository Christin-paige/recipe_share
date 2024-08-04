const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'recipes',
  password: 'Harper',
  port: 5433,
});

module.exports = pool;
