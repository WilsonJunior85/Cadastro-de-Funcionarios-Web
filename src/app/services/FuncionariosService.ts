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

    getFuncionarioPorId(id: number): Observable<ApiResponse<FuncionariosModel>> {
        return this.http.get<ApiResponse<FuncionariosModel>>(`${this.apiUrl}/${id}`);
    }

    atualizarFuncionario(url: string, funcionario: FuncionariosModel): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this.http.put(url, funcionario, { headers }).pipe(
            map((response) => {
                return response;
            })
        );
    }


    getFuncionariosComFiltro(params: any) {
        const queryParams = new URLSearchParams(params).toString();
        const url = queryParams ? `${this.apiUrl}?${queryParams}` : this.apiUrl;
        return this.http.get<ApiResponse<FuncionariosModel>>(url);
    }


    adicionarFuncionario(funcionario: FuncionariosModel): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${this.apiUrl}`, funcionario, { headers });
    }



    openFileDialog() {
        const fileInput: any = document.querySelector('input[type="file"]');
        fileInput?.click();
    }

}