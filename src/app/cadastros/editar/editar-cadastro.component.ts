import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro, CadastroService } from '../shared';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit {

  @ViewChild('formCadastro', {static: true})formCadastro:NgForm;

  cadastro:Cadastro;

  constructor(private cadastroService:CadastroService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // captura o id que ta la no parametro da rota - o + converte a string para número
    this.cadastro = this.cadastroService.buscarPorId(id);
  }

  atualizar():void {
    if (this.formCadastro.form.valid) {
      this.cadastroService.atualizar(this.cadastro);
      this.router.navigate(['/cadastros']);
    }
  }

}
