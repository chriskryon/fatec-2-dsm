import { MegaSenaRepository } from "../repositories/megasena.repository";
import type { MegaSena } from "../types/megasena.types";

export class MegaSenaService {
	private repository: MegaSenaRepository;

	constructor() {
		this.repository = new MegaSenaRepository();
	}

	async getRecente(): Promise<MegaSena> {
		return this.repository.findLatest();
	}

	async getMegaSenaByConcurso(concurso: number): Promise<MegaSena | null> {
		return this.repository.findById(concurso);
	}
}
