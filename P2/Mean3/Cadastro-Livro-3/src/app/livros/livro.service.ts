import { Livro } from "./livro.model"
import { Subject } from "rxjs";

export class LivroService{
  private livros: Livro[] = [];
  private listaLivrosAtualizada = new Subject<Livro[]>();

  getLivros(): Livro[]{
    return [...this.livros];
  }

  adicionarLivro (id: number, autor: string, titulo: string, numPag: number): void{
    this.livros.push({
      id, autor, titulo, numPag
    })
    this.listaLivrosAtualizada.next([...this.livros])
  }

  getListaDeLivrosAtualizadaObservable(){
    return this.listaLivrosAtualizada.asObservable()
  }
}
