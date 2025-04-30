// Interface for MegaSena data
export interface MegaSena {
	concurso: number;
	data_do_sorteio: Date;
	bola1: number;
	bola2: number;
	bola3: number;
	bola4: number;
	bola5: number;
	bola6: number;
	ganhadores_6_acertos: number;
	cidade_uf: string | null;
	rateio_6_acertos: number;
	ganhadores_5_acertos: number;
	rateio_5_acertos: number;
	ganhadores_4_acertos: number;
	rateio_4_acertos: number;
	acumulado_6_acertos: number;
	arrecadacao_total: number;
	estimativa_premio: number;
	acumulado_sorteio_especial_mega_da_virada: number;
	observacao: string | null;
}
