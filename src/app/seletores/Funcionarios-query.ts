import { Query } from "../core/models/query";


export class FuncionariosQuery extends Query {
    public id: number = 0;
    public nome: string = '';
    public sobrenome: string = '';
    public departamento: string = '';
    public ativo: boolean = true;
    public turno: string = '';
    public dataDeCriacao: Date = new Date();
    public dataAlteracao: Date = new Date();
    public email: string = '';

    // public flgAtivo : boolean = true;
    // public flgRecebeSMS : boolean = false;
    // public flgAtivo: boolean;
    // public flgRecebeSMS: boolean;

}


