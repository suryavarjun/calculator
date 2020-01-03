import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-numberss',
  templateUrl: './numberss.page.html',
  styleUrls: ['./numberss.page.scss'],
})
export class NumberssPage {

  value:any='';
  oldDigit = '0';
  lastDig ='';
  forNewPoint = true;
  result= '';
  a:string[] =[''];


  calculate(a:string[]){
let total=0;
total=parseInt(a[0]);
a.forEach((element,index)=>{
  if(element === '+'){
    total = total + parseInt(a[index+1]);
  }
  else if(element === '-'){
    total = total - parseInt(a[index+1]);
  }
  else if(element === '*'){
    total = total * parseInt(a[index+1]);
  }
  else if(element === '/'){
    total = total / parseInt(a[index+1]);
  }
});
this.value=total;
console.log(total);
  }
  onButtonPress(num){
    console.log(num);
  let i = this.a.length-1;
  if(num === '='){
    console.log(this.a)
    this.calculate(this.a)
    return;
  }

  this.value +=num;
  if(num == '+' || num == '-' || num == '*' || num == '/'){
    this.a.push(num);
    this.a.push('');
    return;
  }

  if(num == 'C'){
    this.a =[''];
    this.value= '';
    return;
  }
  this.a[i] += num;

  


  //   if(isNumber (num)){
  //     console.log('is a number');
  //     if(this.forNewPoint)
  //     this.value= '' + num;
  //     else
  //     this.value+=''+num;
  //     this.forNewPoint= false;
  //   } 
  //   else if(num === 'C'){
  //     this.value = '0';
  //     this.forNewPoint = true;
  //   }
  //   else if( num === '='){
  //     if(this.lastDig === '*')
  //     this.value = '' + (parseInt(this.oldDigit) * parseInt(this.value));
  //     else if(this.lastDig === '+')
  //     this.value = '' + (parseInt(this.oldDigit) + parseInt(this.value));
  //     else if(this.lastDig === '-')
  //     this.value = '' + (parseInt(this.oldDigit) - parseInt(this.value));
  //     else if(this.lastDig === '/')
  //     this.value = '' + (parseInt(this.oldDigit) / parseInt(this.value));
  //   }
  //   else {
  //       this.forNewPoint = true;
  //       this.oldDigit = this.value;
  //       this.lastDig = num;
  //   }
  // }
  
  
//   btnClicked(btn) {
//     console.log('CalculatorPage::btnClicked = ' + btn);
//     if (btn == "C") {
//         this.result = "";
//     } else if (btn == "=") {
//         this.result = eval(this.result);
//     } else if (btn == "squareroot") {
//         this.result = Math.sqrt(eval(this.result)) + "";
//     } else if (btn == "square") {
//         this.result = eval("(" + this.result + ") * ( " + this.result + ")");
//     } else if (btn == "reciproc") {
//         this.result = eval(1 + "/ (" + this.result + ")");
//     } else {
//         this.result += btn;
//     }
// }

}
}
