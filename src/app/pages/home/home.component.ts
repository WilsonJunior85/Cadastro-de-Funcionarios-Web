import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FuncionariosModel } from 'src/app/models/funcionarios';
import { FuncionariosQuery } from 'src/app/seletores/Funcionarios-query';
import { FuncionariosService } from 'src/app/services/FuncionariosService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public form!: FormGroup;
  public paginaAtual = ['Pesquisar Funcionários'];
  public funcionarios: FuncionariosModel[] = [];
  public listarfuncionarios: FuncionariosModel[] = [];
  public funcionario: any[] = [];
  public turnos: string[] = [];
  public mostrarTabela = false; //Ocultar a tela




  constructor(
    public funcionarioService: FuncionariosService,
    private router: Router,

  ) {
    this.form = this.montarForm();
  }

  ngOnInit(): void {
    this.form = this.montarForm();



  }



  private montarForm(): FormGroup {
    return new FormGroup({
      id: new FormControl("", []),
      nome: new FormControl("", []),
      sobrenome: new FormControl("", []),
      departamento: new FormControl("", []),
      turno: new FormControl("", []),
      email: new FormControl("", []),
      ativo: new FormControl(true), // <- importante

    });
  }


  ListarFuncionarios(event: Event): void {
    event.preventDefault();

    // Obter os valores do formulário
    const id = this.form.get('id')?.value;
    const nome = this.form.get('nome')?.value;
    const sobrenome = this.form.get('sobrenome')?.value;
    const departamento = this.form.get('departamento')?.value;
    const turno = this.form.get('turno')?.value;
    const email = this.form.get('email')?.value;

    // Criação de um objeto com os parâmetros de busca
    const params: any = {};

    // Adiciona ao objeto params apenas os campos que não estão vazios
    if (id) params.id = id;
    if (nome) params.nome = nome;
    if (sobrenome) params.sobrenome = sobrenome;
    if (departamento) params.departamento = departamento;
    if (turno) params.turno = turno;
    if (email) params.email = email;


    // Chama o serviço de busca com os parâmetros de filtro
    this.funcionarioService.getFuncionariosComFiltro(params).subscribe(response => {
      if (response && response.data) {
        const data = response.data;
        this.funcionarios = Array.isArray(data) ? data : [data]; // <- usa diretamente como array

      } else {
        this.funcionarios = [];
      }
    }, (error: HttpErrorResponse) => {
      console.error('Erro ao buscar funcionário:', error);
      this.funcionarios = [];
    });


    // Se houver resultados, exibe a tabela
    this.mostrarTabela = this.funcionarios.length > 0;
  }



  CadastrarFuncionarios(event: Event): void {
    this.router.navigate(['/cadastrar-funcionarios']); // Substitua pela rota correta
  }


  Teste() {

  }

}








// if (id) {
//   // Caso o ID seja informado, buscamos por ele
//   this.funcionarioService.getFuncionarioPorId(id).subscribe(response => {
//     if (response && response.data) {
//       this.funcionarios = [response.data];  // Atribui o array de funcionários dentro da propriedade 'data'

//     } else {
//       this.funcionarios = [];  // Se não encontrar, limpa a lista
//     }
//   }, error => {
//     console.error('Erro ao buscar funcionário:', error);
//     this.funcionarios = [];  // Limpa a lista se ocorrer erro
//   });




// } else {
//   // Caso não tenha ID, buscamos todos os funcionários
//   this.funcionarioService.getAllFuncionarios().subscribe(response => {
//     if (response && response.data) {
//       this.funcionarios = response.data;

//     } else {
//       this.funcionarios = [];
//       console.log('Nenhum funcionário encontrado');
//     }
//   }, error => {
//     console.error('Erro ao buscar todos os funcionários:', error);
//     this.funcionarios = [];
//   });
// }