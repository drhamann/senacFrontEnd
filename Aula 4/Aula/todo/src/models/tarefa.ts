export class Tarefa{
  constructor(nomeTarefaVal: string, completaVal: boolean = false) {
    this.nomeTarefa = nomeTarefaVal;
    this.completo = completaVal;
  }
  nomeTarefa: string;
  completo: boolean;
}
