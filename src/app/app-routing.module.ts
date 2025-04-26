import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarFuncionariosComponent } from './pages/menu/cadastrar-funcionarios/cadastrar-funcionarios.component';
import { EditarFuncionariosComponent } from './pages/menu/editar-funcionarios/editar-funcionarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar-funcionarios', component: CadastrarFuncionariosComponent },
  { path: 'editar-funcionarios', component: EditarFuncionariosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
