import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'postgres',
  username: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5433,
  database: 'reserve_db',
  entities: ['src/**/**/*.entity{.ts,.js}'],
  migrations: ['src/config/migrations/*{.ts,.js}'],
});
