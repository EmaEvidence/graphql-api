import humps from 'humps';

module.exports = (pgPool) => {
  return {
    getUser(apiKey) {
      return pgPool.query(
            `select * from users 
            where api_key = $1`, [apiKey]
            ).then((result) => {
              return humps.camelizeKeys(result.rows[0]);
            });
    },

    getContests(user) {
      return pgPool.query(
        `select * from contests
        where created_by = $1`, [user.id])
        .then((result) => {
          return humps.camelizeKeys(result.rows);
        });
    }
  };
};
