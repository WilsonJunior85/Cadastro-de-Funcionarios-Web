import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosModel } from 'src/app/models/funcionarios';
import { FuncionariosService } from 'src/app/services/FuncionariosService';

@Component({
  selector: 'app-cadastrar-funcionarios',
  templateUrl: './cadastrar-funcionarios.component.html',
  styleUrls: ['./cadastrar-funcionarios.component.scss']
})
export class CadastrarFuncionariosComponent implements OnInit {
  public form!: FormGroup;
  public paginaAtual = ['Cadastrar Funcionários'];
  public funcionarios: FuncionariosModel[] = [];
  public listarfuncionarios: FuncionariosModel[] = [];


  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    public funcionarioService: FuncionariosService,
    public router: Router,
  ) { }

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


  CadastrarFuncionarios(): void {
    if (this.form.valid) {
      const novoFuncionario = this.form.value;

      this.funcionarioService.adicionarFuncionario(novoFuncionario).subscribe({
        next: () => {
          alert('Funcionário cadastrado com sucesso!');
          this.router.navigate(['']); // ajuste a rota se necessário
        },
        error: (err) => {
          console.error('Erro ao cadastrar funcionário:', err);
          alert('Erro ao cadastrar funcionário.');
        }
      });
    } else {
      alert('Formulário inválido. Preencha todos os campos.');
    }
  }



}
