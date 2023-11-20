import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefasComponent } from './pages/listar-tarefas/listar-tarefas.component';
import { ListarTarefaNaoConcluidasComponent } from './pages/listar-tarefa-nao-concluidas/listar-tarefa-nao-concluidas.component';
import { ListarTarefaConcluidasComponent } from './pages/listar-tarefa-concluidas/listar-tarefa-concluidas.component';
import { CadastrarTarefaComponent } from './pages/cadastrar-tarefa/cadastrar-tarefa.component';

const routes: Routes = [
  {
    path : "",
    component : ListarTarefasComponent
  },
  {
    path : "pages/listar-tarefas",
    component : ListarTarefasComponent
  },
  {
    path : "pages/listar-tarefa-nao-concluidas",
    component : ListarTarefaNaoConcluidasComponent
  },
  {
    path : "pages/listar-tarefa-concluidas",
    component : ListarTarefaConcluidasComponent
  },
  {
    path : "pages/cadastrar-tarefa",
    component : CadastrarTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
