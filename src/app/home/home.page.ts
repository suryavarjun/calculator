import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isNumber } from 'util';
import { FormGroup, Validators,  FormBuilder, FormControl } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  C: string;
  element: any;
  [x: string]: any;
custname:string='';
custpass:any='';
value:any='';
oldValue='0';
lastValue='';
lastsign:string;
b:string[] =[''];

// i = 0;
numberGroups = [
  [7, 8, 9, '+'],
  [4, 5, 6, '-'],
  [1, 2, 3, '*'],
  [0, 'C', '/', '=']
];

public todo : FormGroup;
error_messages = {
  'custName' : [
    { type: 'required', message: 'Email is required.'}
  ],
  'custNumber' : [
    { type: 'required', message: 'Number is required.'}
  ],
}
calculate(b:string[]){
  let value,total=0;
  total = parseInt(b[0]);
  b.forEach((element,index)=>{
    if(element=='+'){
       total = total + parseInt(b[index+1]);
    }
    else if(element=='-'){
      total = total - parseInt(b[index+1]);
    }
    else if(element=='*'){
      total = total * parseInt(b[index+1]);
    }
    else if(element =='/'){
      total = total/parseInt(b[index+1]);
    }
  }); 
  this.value = total;
  console.log(total);
}

onButtonPress(num){
  console.log(num);
let i = this.b.length-1;
if(num === '='){
  console.log(this.b);
  this.calculate(this.b);
  return;
}
 
this.value += num;
if(num =='*'||num =='+'||num=='-'||num=='/'){
  this.b.push(num);
  this.b.push(''); 
  return;
}
else if(num ==='C'){
  this.b =[''];
  this.value =0;
  return;
}
this.b[i] += num;

  
}
  constructor( private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) 
  {
    this.todo = this.formBuilder.group({
      title: ['MyForm', Validators.required],
      description: ['Testing Form'],
      customerName: new FormControl(),
      customerPassword: new FormControl()
    });
  }

  doSumbit(){
    this.custname='';
    this.custpass='';
  }

  cal(){
    this.router.navigate(['numberss'])
  }
}
