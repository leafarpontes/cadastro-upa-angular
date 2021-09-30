import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro, CadastroService } from '../shared';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @ViewChild('formCadastro', {static: true})formCadastro:NgForm;

  cadastro:Cadastro;

  constructor(private cadastroService:CadastroService, private router:Router) { }

  ngOnInit(): void {
    this.cadastro = new Cadastro();
  }

  cadastrar():void {
    if (this.formCadastro.form.valid) {
      this.cadastroService.cadastrar(this.cadastro);
      this.router.navigate(['/cadastros']);
    }
  }
}
