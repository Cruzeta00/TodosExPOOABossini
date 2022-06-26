import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Livro } from "../livro.model";
@Component({
  selector:'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent{
  @Output() livroAdicionado = new EventEmitter<Livro>();
  id: number;
  titulo: string;
  autor: string;
  numPag: number;
  onAdicionarLivro(form: NgForm){
    const livro: Livro = {
      id: form.value.id,
      titulo: form.value.titulo,
      autor: form.value.autor,
      numPag: form.value.numPag,
    }
    this.livroAdicionado.emit(livro)
  }
}
