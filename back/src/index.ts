import express, { type Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import megaSenaRoutes from "./routes/megasena.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", megaSenaRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
	res.status(200).send("OK");
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
