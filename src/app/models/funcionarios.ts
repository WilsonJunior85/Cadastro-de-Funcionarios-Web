export class FuncionariosModel {
    public id: number;
    public nome: string;
    public sobrenome: string;
    public departamento: string;
    public ativo: boolean;
    public turno: string;
    public dataDeCriacao: Date;
    public dataAlteracao: Date;
    public email: string;





    constructor(data: any = {}) {
        if (data == null || data == undefined) { data = {}; }
        this.id = data.id;
        this.nome = data.nome;
        this.sobrenome = data.sobrenome;
        this.departamento = data.departamento;
        this.ativo = data.ativo;
        this.turno = data.turno;
        this.dataDeCriacao = data.dataDeCriacao;
        this.dataAlteracao = data.dataAlteracao;
        this.email = data.email;


    }
}
