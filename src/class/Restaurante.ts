export class Restaurante {
	nome: string;
	email: string;
	endereco: string;
	telefone: string;
	cnpj: number;
}

export class Mesa {
	//restaurante: number; // relativo a qual restaurante
	numeroMesa: number; // identificação da mesa pelo usuario
	qrCode: number; // metodo 1 de achar a mesa no banco de dados
	id: number; // metodo 2 de achar a mesa no banco de dados
}
