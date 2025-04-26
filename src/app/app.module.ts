import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './core/components/footer/footer.component';

import { EditarFuncionariosComponent } from './pages/menu/editar-funcionarios/editar-funcionarios.component';
import { CadastrarFuncionariosComponent } from './pages/menu/cadastrar-funcionarios/cadastrar-funcionarios.component';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionariosService } from './services/FuncionariosService';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CadastrarFuncionariosComponent,
    EditarFuncionariosComponent,


  ],
  imports: [
    BrowserModule,
    //CoreModule.forRoot(environment),
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    FuncionariosService
  ],
  bootstrap: [AppComponent

  ]
})
export class AppModule { }
