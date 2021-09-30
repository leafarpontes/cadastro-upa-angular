import { Component, OnInit } from '@angular/core';
import { Cadastro, CadastroService } from '../shared';

@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './listar-cadastro.component.html',
  styleUrls: ['./listar-cadastro.component.css']
})
export class ListarCadastroComponent implements OnInit {

  cadastros:Cadastro[]

  constructor(private cadastroService:CadastroService) { }

  ngOnInit(): void {
    this.cadastros = this.listarCadastros();
    // this.cadastros = [
    //   new Cadastro(123, 'Ronaldo', 'Urgente', true),
    //   new Cadastro(456, 'Joãozinho', 'Sem pressa', false),
    //   new Cadastro(789, 'Cláudio', 'Urgente', true),
    //   new Cadastro(987, 'Lucas', 'Sem pressa', false)
    // ];
  }

  listarCadastros():Cadastro[] {
    return this.cadastroService.listarCadastros();
  }

  remover($event:any, cadastro:Cadastro):void {
    $event.preventDefault();
    if (confirm(`Tem certeza que deseja remover o cadastro do(a) paciente ${cadastro.nomePaciente}?`)) {
      this.cadastroService.remover(cadastro.id);
      this.cadastros = this.listarCadastros();
    }
  }

  alterarStatus(cadastro:Cadastro):void {
    if (confirm(`Deseja alterar o status do atendimento do(a) paciente "${cadastro.nomePaciente}"?`)) {
      this.cadastroService.alterarStatus(cadastro.id);
      this.cadastros = this.listarCadastros();
    }
    else {
      this.cadastros = this.listarCadastros();
    }
  }

}
