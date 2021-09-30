import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[pacienteAtendido]'
})
export class PacienteAtendidoDirective implements OnInit {

  @Input() pacienteAtendido:boolean;

  constructor(private el:ElementRef) { }

  ngOnInit() {
    if (this.pacienteAtendido) {
      this.el.nativeElement.style.backgroundColor = "#7bd1a1";
    }
  }

}
