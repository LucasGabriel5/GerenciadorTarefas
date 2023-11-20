import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa-nao-concluidas',
  templateUrl: './listar-tarefa-nao-concluidas.component.html',
  styleUrls: ['./listar-tarefa-nao-concluidas.component.css']
})
export class ListarTarefaNaoConcluidasComponent {
  constructor(private client: HttpClient) 
  {}
  tarefasNao : any[] = [];
  ngOnInit(): void{
    this.client.get<any>("https://localhost:7015/api/tarefa/naoconcluidas")
    .subscribe({
      next: (tarefa) => {
        this.tarefasNao = tarefa;
        console.log(this.tarefasNao); 
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }
}
