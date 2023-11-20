import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent {
  constructor(private client: HttpClient,private router: Router) 
  {}
  categorias: any[]=[];
  titulo?: string;
  descricao?: string;
  categoriaId?: number;
  ngOnInit(): void{
    this.client.get<any>("https://localhost:7015/api/categoria/listar")
    .subscribe({
      next: (cat) => {
        this.categorias = cat;
        console.log(this.categorias); 
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }
  
  cadastrarTarefa(){
    let esquema ={
      titulo : this.titulo,
      descricao : this.descricao,
      categoriaId: this.categoriaId
   };
    this.client.post<any>("https://localhost:7015/api/tarefa/cadastrar",esquema)
    .subscribe({
      next: (cat) => {
        console.log(cat);
        this.router.navigate(['pages/listar-tarefas']); 
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }
}
