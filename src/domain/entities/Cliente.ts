export class Cliente {
    
    public Id: number;
    public Nome: string;
    public Sobrenome: string;
    public Email: string;
    public Telefone: string;
    public CPF: string;

    constructor(nome: string, sobrenome: string, email: string, telefone: string, cpf: string) {
        this.Nome = nome;
        this.Sobrenome = sobrenome;
        this.Email = email;
        this.Telefone = telefone;
        this.CPF = cpf;
    }
}