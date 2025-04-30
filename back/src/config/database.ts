import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
	user: process.env.BD_USER,
	host: process.env.BD_HOST,
	database: process.env.BD_DATABASE,
	password: process.env.BD_PASSWORD,
	port: Number.parseInt(process.env.BD_PORT || "5432"),
});

export default pool;
