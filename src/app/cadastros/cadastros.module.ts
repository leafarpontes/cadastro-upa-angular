import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroService, PacienteAtendidoDirective } from './shared';
import { ListarCadastroComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar';
import { EditarCadastroComponent } from './editar';



@NgModule({
  declarations: [
    ListarCadastroComponent,
    CadastrarComponent,
    EditarCadastroComponent,
    PacienteAtendidoDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CadastroService
  ]
})
export class CadastrosModule { }
