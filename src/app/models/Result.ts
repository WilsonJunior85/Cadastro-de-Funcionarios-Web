export interface Result<T> {
    data: T;
    mensagem: string;
    sucesso: boolean;
    count: number;

}


export class ComboResult {
    key: any;
    val: any;
    constructor(key: any, val: any) {
        this.key = key;
        this.val = val;
    }
}
