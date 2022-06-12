import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Calculadora';

  num1:number;
  num2:number;
  num3:number;

  public adicionar(){
    this.num3 = this.num1 + this.num2;
    return this.num3;
  }

  public subtrair(){
    this.num3 = this.num1 - this.num2;
    return this.num3;
  }

  public multiplicar(){
    this.num3 = this.num1 * this.num2;
    return this.num3;
  }

  public dividir(){
    this.num3 = this.num1 / this.num2;
    return this.num3;
  }
}
