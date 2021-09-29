module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'buscas_db',
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true,
  },
};
