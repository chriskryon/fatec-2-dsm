import type { MegaSena } from "../types/megasena.types";
import db from "../config/database";

export class MegaSenaRepository {
	async findLatest(): Promise<MegaSena> {
		const result = await db.query(
			"SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1",
		);
		return result.rows[0] || [];
	}

	async findById(concurso: number): Promise<MegaSena | null> {
		const result = await db.query(
			"SELECT * FROM megasena WHERE concurso = $1",
			[concurso],
		);
		return result.rows[0] || null;
	}
}
