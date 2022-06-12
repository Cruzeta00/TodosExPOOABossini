import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora-2';

  num1: number;
  num2: number;
  num3: number;
  operacoes = [
    {
      nome: 'soma',
      descricao: 'Adiciona o 2º número ao 1º em um 3º resultado.',
      simbolo: '+'
    },
    {
      nome: 'subtração',
      descricao: 'Subtrai o 2º número do 1º em um 3º resultado.',
      simbolo: '-'
    },
    {
      nome: 'multiplicação',
      descricao: 'Multiplica o 2º número pelo 1º em um 3º resultado.',
      simbolo: '*'
    },
    {
      nome: 'divisão',
      descricao: 'Divide o 2º número pelo 1º em um 3º resultado.',
      simbolo: '/'
    },
  ]

  adicionar = () => (this.num3 = this.num1 + this.num2);

  subtrair = () => (this.num3 = this.num1 - this.num2);

  multiplicar = () => (this.num3 = this.num1 * this.num2);

  dividir = () => (this.num3 = this.num1 / this.num2);
}
