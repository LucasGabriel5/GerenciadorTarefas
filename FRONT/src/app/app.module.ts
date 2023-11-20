import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListarTarefasComponent } from './pages/listar-tarefas/listar-tarefas.component';
import { CadastrarTarefaComponent } from './pages/cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefaNaoConcluidasComponent } from './pages/listar-tarefa-nao-concluidas/listar-tarefa-nao-concluidas.component';
import { ListarTarefaConcluidasComponent } from './pages/listar-tarefa-concluidas/listar-tarefa-concluidas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    ListarTarefaNaoConcluidasComponent,
    ListarTarefaConcluidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
