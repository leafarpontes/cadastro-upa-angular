export class Cadastro {
    constructor(
        public id?:number,
        public nomePaciente?:string,
        public prioridade?:string,
        public ativo:boolean = true,
        public atendido?:boolean
    ) {
        
    }
}