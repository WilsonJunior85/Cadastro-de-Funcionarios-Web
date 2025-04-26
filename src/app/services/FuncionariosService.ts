import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ApiResponse } from "../core/models/api-response";
import { FuncionariosModel } from "../models/funcionarios";
//import { ApiService } from "../core/services/api.service";
import { HttpClient } from '@angular/common/http';
import { Result } from "../models/Result";






@Injectable()
export class FuncionariosService {
    private apiUrl = 'https://localhost:7281/api/Funcionario';
    constructor(private http: HttpClient) { }



    getAllFuncionarios(): Observable<Result<FuncionariosModel[]>> {
        return this.http.get<Result<FuncionariosModel[]>>(this.apiUrl);
    }


    getFuncionarioPorId(id: number) {
        return this.http.get<ApiResponse<FuncionariosModel>>(`https://localhost:7281/api/Funcionario/${id}`);
    }

    async get(val: string): Promise<FuncionariosModel | undefined> {
        return await this.http.get<ApiResponse<FuncionariosModel>>("api/Funcionario/" + val).pipe(
            map((res: ApiResponse<FuncionariosModel>) => {
                return new FuncionariosModel(res.data);
            })
        ).toPromise();
    }



    getFuncionariosComFiltro(params: any) {
        // Monta a URL com os parâmetros de consulta
        let url = 'https://localhost:7281/api/Funcionario'; // Ajuste a URL para o seu servidor de API

        // Se existirem parâmetros, converte para uma string de query
        const queryParams = new URLSearchParams(params).toString();
        if (queryParams) {
            url = `${url}?${queryParams}`;
        }

        // Faz a requisição GET com os parâmetros
        return this.http.get<ApiResponse<FuncionariosModel>>(url);
    }



    public openFileDialog() {
        const fileInput: any = document.querySelector('input[type="file"]');
        fileInput.click();
    }




    // atualizarFuncionarios(val: any): Promise<ApiResponse<boolean>> {
    //     return new Promise((resolve, reject) => {
    //         this.http.put("api/Funcionario", val).subscribe(
    //             (result: ApiResponse<boolean>) => {
    //                 if (!result.isValid || (result.isValid && !result.data)) {
    //                     reject(result);
    //                 }
    //                 if (result.isValid && result.data) {
    //                     resolve(result);
    //                 }
    //             },
    //             (err: any) => {
    //                 reject(err);
    //             }
    //         );
    //     });
    // }

    // cadrastraFuncionarios(val: any): Promise<ApiResponse<boolean>> {
    //     return new Promise((resolve, reject) => {
    //         this.http.post("api/StatusPerfilLinhas/", val).subscribe(
    //             (result: ApiResponse<boolean>) => {
    //                 if (!result.isValid || (result.isValid && !result.data)) {
    //                     reject(result);
    //                 }
    //                 if (result.isValid && result.data) {
    //                     resolve(result);
    //                 }
    //             },
    //             (err: any) => {
    //                 reject(err);
    //             }
    //         );
    //     });
    // }


    // async getFuncionarios(val: string): Promise<FuncionariosModel> {
    //     //return await this.http.get(this.apiUrl + val).pipe(
    //     return await this.http.get("api/Funcionario/" + val).pipe(
    //         map((res) => {
    //             return new FuncionariosModel(res.data);
    //         })
    //     )
    //         .toPromise();
    // }

    // getFuncionarioPorId(id: string): Observable<FuncionariosModel[]> {
    //     return this.http.get<FuncionariosModel[]>(`${this.apiUrl}/${id}`);
    // }

    // async getAllFuncionarios(): Promise<FuncionariosModel[]> {
    //     return this.http.get('api/Funcionario').pipe(
    //         map((res: any) => {
    //             if (res && res.data) {
    //                 return res.data.map((item: any) => new FuncionariosModel(item));
    //             } else {
    //                 return [];
    //             }
    //         })
    //     ).toPromise();
    // }

}