import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  
  result:string='';
  resultName= 'result';
  add(firstNumber:string,secondNumber:string)
  {
    this.resultName="Add Result"
    this.result = (Number(firstNumber)+Number(secondNumber)).toString(); 
    
  }
  sub(firstNumber:string,secondNumber:string)
  {
    this.resultName="Sub Result"
    this.result = (Number(firstNumber)-Number(secondNumber)).toString(); 
    
  }
  mul(firstNumber:string,secondNumber:string)
  {
    this.resultName="Mul Result"
    this.result = (Number(firstNumber)*Number(secondNumber)).toString(); 
    
  }
  div(firstNumber:string,secondNumber:string)
  {
    this.resultName="Div Result"
    this.result = (Number(firstNumber)/Number(secondNumber)).toString(); 
    
  }
}
