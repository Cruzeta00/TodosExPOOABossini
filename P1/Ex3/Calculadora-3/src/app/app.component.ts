import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = '!!!!!Calculadora 3!!!!!';
  operacao = new EventEmitter();
  num1: number;
  num2: number;
  chave: number = 0;
  soma = () => (this.num1 + this.num2);
  subtrair = () => (this.num1 - this.num2);
  multiplicar = () => (this.num1 * this.num2);
  dividir = () => (this.num1 / this.num2);
  @Output()
  listaOperacoes = [this.soma, this.subtrair, this.multiplicar, this.dividir];
  loopEterno(){
    do {

    }
    while(this.chave != 5)
    this.operacao.emit();
  }
}
