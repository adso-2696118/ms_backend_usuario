import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config();

const pool = createPool({
    host:process.env.MYSQLHOST,
    port:process.env.MYSQLPORT,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    database:process.env.MYSQLDATABASE
});

export default pool;