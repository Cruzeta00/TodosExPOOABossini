import { Livro } from "./livro.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LivroService{
  private livros: Livro[] = [];
  private listaLivrosAtualizada = new Subject<Livro[]>();

  constructor(private httpCliente: HttpClient){

  }

  getLivros(): void{
    this.httpCliente.get<{mensagem: string, livros: Livro[]}>(
      'http://localhost:3000/api/livros').subscribe(
        (dados) => {
          this.livros = dados.livros;
          this.listaLivrosAtualizada.next([...this.livros]);
        }
      )
  }

  //getLivros(): Livro[]{
    //return [...this.livros];
  //}

  adicionarLivro (id: number, autor: string, titulo: string, numPag: number){
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      numPag: numPag
    };
    this.httpCliente.post<{mensagem: string}>('http://localhost:3000/api/livros',
    livro).subscribe(
      (dados) => {
        console.log(dados.mensagem);
        this.livros.push(livro);
        this.listaLivrosAtualizada.next([...this.livros]);
      }
    )
  }

  getListaDeLivrosAtualizadaObservable(){
    return this.listaLivrosAtualizada.asObservable()
  }
}
