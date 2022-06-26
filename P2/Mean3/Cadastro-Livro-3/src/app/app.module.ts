import { AppComponent } from './app.component';
import { LivroInserirComponent } from './livros/livro-inserir/livro-inserir.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LivroListaComponent } from './livros/livro-lista/livro-lista.component';
import { LivroService } from './livros/livro.service';


@NgModule({
  declarations: [
    AppComponent,
    LivroInserirComponent,
    CabecalhoComponent,
    LivroListaComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
