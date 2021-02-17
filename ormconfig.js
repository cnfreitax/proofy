module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['./src/infra/db/postgres/**/typeorm/entities/**'],
  migrations: ['./src/infra/db/typeorm/migrations/**'],
  cli: {
    migrationsDir: './src/infra/db/typeorm/migrations',
  },
};
