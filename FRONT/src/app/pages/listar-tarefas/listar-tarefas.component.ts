import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent {
  constructor(private client: HttpClient,private router: Router) 
  {}
  tarefas : any[] = [];
  ngOnInit(): void{
    this.client.get<any>("https://localhost:7015/api/tarefa/listar")
    .subscribe({
      next: (tarefa) => {
        this.tarefas = tarefa;
        console.log(this.tarefas); 
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }
  alterarStatus(alterar:[]){
    console.log(alterar)
    this.client.patch<any>("https://localhost:7015/api/tarefa/alterar",alterar)
    .subscribe({
      next: (tarefa) => {
        console.log(this.tarefas); 
        this.router.navigate(['pages/listar-tarefa-nao-concluidas']);
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }
}
