import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-listar-tarefa-concluidas',
  templateUrl: './listar-tarefa-concluidas.component.html',
  styleUrls: ['./listar-tarefa-concluidas.component.css']
})
export class ListarTarefaConcluidasComponent {
  constructor(private client: HttpClient) 
  {}
  tarefasConcluida : any[] = [];
  ngOnInit(): void{
    this.client.get<any>("https://localhost:7015/api/tarefa/concluidas")
    .subscribe({
      next: (tarefa) => {
        this.tarefasConcluida = tarefa;
        console.log(this.tarefasConcluida); 
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }
}
