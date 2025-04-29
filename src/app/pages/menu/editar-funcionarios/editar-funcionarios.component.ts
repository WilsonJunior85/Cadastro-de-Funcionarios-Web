import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosModel } from 'src/app/models/funcionarios';
import { FuncionariosService } from 'src/app/services/FuncionariosService';

@Component({
  selector: 'app-editar-funcionarios',
  templateUrl: './editar-funcionarios.component.html',
  styleUrls: ['./editar-funcionarios.component.scss']
})
export class EditarFuncionariosComponent implements OnInit {

  public form!: FormGroup;
  public paginaAtual = ['Editar Funcionários'];
  public funcionarios: FuncionariosModel[] = [];
  public funcionariosObject: FuncionariosModel = new FuncionariosModel();

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    public funcionarioService: FuncionariosService,
    public router: Router,
    private fb: FormBuilder // FormBuilder para criar o formulário
  ) {
    this.form = this.fb.group({
      id: [''],
      nome: [''],
      sobrenome: [''],
      departamento: [''],
      turno: [''],
      email: ['']
    });

  }

  ngOnInit(): void {
    this.carregarFuncionario();  // Carrega os dados do funcionário ao inicializar o componente
    this.carregarForm();

  }



  // Método para carregar os dados no formulário
  private carregarForm(): void {
    this.form.patchValue({
      id: this.funcionariosObject.id,
      nome: this.funcionariosObject.nome,
      sobrenome: this.funcionariosObject.sobrenome,
      departamento: this.funcionariosObject.departamento,
      turno: this.funcionariosObject.turno,
      email: this.funcionariosObject.email,
      ativo: this.funcionariosObject.ativo ?? true // <- adiciona isso!
    });
  }



  private carregarFuncionario() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.funcionarioService.getFuncionarioPorId(id).subscribe(response => {
      this.funcionariosObject = response.data;
      this.carregarForm(); // carrega os dados no form
    });

  }


  EditarFuncionarios(): void {
    if (this.form.valid) {  // Verifica se o formulário é válido antes de enviar
      this.funcionarioService.atualizarFuncionario('https://localhost:7281/api/Funcionario', this.form.value).subscribe(
        (response: any) => {
          console.log('Funcionário editado com sucesso!');
          this.router.navigate(['']);  // Redireciona para a página inicial ou para onde você quiser
        },
        (error) => {
          console.error('Erro ao editar funcionário:', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }




}
