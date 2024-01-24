import { Pool } from 'pg';

// Create a PostgreSQL pool
const pool = new Pool({
  user: 'postgres',
  host: 'spyberrys.cvcs8jmrlwg6.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'spyberrys',
  port: 5432, // Default PostgreSQL port
});

export default pool;
