import type { Request, Response } from "express";
import { MegaSenaService } from "../services/megasena.service";

export class MegaSenaController {
	private service: MegaSenaService;

	constructor() {
		this.service = new MegaSenaService();
	}

	async getRecente(req: Request, res: Response): Promise<void> {
		try {
			const megaSenaList = await this.service.getRecente();
			res.json(megaSenaList);
		} catch (error) {
			res.status(500).json({ message: "Erro ao buscar concursos", error });
		}
	}

	async getByConcurso(req: Request, res: Response): Promise<void> {
		try {
			const concurso = Number.parseInt(req.params.concurso);
			if (Number.isNaN(concurso)) {
				res.status(400).json({ message: "Concurso inválido" });
				return;
			}

			const megaSena = await this.service.getMegaSenaByConcurso(concurso);

			if (!megaSena) {
				res
					.status(404)
					.json({ message: `Concurso ${concurso} não encontrado` });
				return;
			}

			res.json(megaSena);
		} catch (error) {
			res.status(500).json({ message: "Erro ao buscar concurso", error });
		}
	}
}
