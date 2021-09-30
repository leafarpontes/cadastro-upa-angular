import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro.model';

@Injectable()
export class CadastroService {

  constructor() { }

  listarCadastros():Cadastro[] { // retorna um array do tipo Cadastro
    const cadastros = localStorage['cadastros'];
    return cadastros ? JSON.parse(cadastros) : []; // retorna os cadastros em JSON, caso não houver nenhum, retorna array vazio
  }

  cadastrar(cadastro:Cadastro):void {
    const cadastros = this.listarCadastros();
    cadastro.id = new Date().getTime();
    cadastros.push(cadastro);
    localStorage['cadastros'] = JSON.stringify(cadastros);
  }

  buscarPorId(id:number):Cadastro {
    const cadastros:Cadastro[] = this.listarCadastros();
    return cadastros.find(cadastro => cadastro.id === id);
  }

  atualizar(cadastro:Cadastro):void {
    const cadastros:Cadastro[] = this.listarCadastros();
    cadastros.forEach((obj, index, objs) => {
      if (cadastro.id === obj.id) {
        objs[index] = cadastro;
      }
    });
    localStorage['cadastros'] = JSON.stringify(cadastros);
  }

  remover(id:number):void {
    let cadastros:Cadastro[] = this.listarCadastros();
    cadastros.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].ativo = false;
      }
    });
    localStorage['cadastros'] = JSON.stringify(cadastros);
  }

  alterarStatus(id:number):void {
    const cadastros:Cadastro[] = this.listarCadastros();
    cadastros.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].atendido = !obj.atendido;
      }
    });
    localStorage['cadastros'] = JSON.stringify(cadastros);
  }
 }
