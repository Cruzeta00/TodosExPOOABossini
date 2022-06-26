import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.scss']
})
export class LivroListaComponent implements OnInit, OnDestroy {
  livros: Livro[] = [];
  private livrosSubscription: Subscription

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livros = this.livroService.getLivros()
    this.livrosSubscription = this.livroService.getListaDeLivrosAtualizadaObservable()
    .subscribe((livros: Livro[]) => {
      this.livros = livros
    })
  }

  ngOnDestroy(): void {
    this.livrosSubscription.unsubscribe()
  }

}
