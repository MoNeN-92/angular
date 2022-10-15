import { Component, OnInit ,  Output, EventEmitter , Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


 @Input() mydec ='';
 @Output() items = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.mydec);

    this.items.emit('test')
    
  }
prod:any = [
  {
  title : 'iphone',
  price : 3000,
  kg : [0.800],
  sale : null,
  gift : true,
  avatar :[
'assets/img/iphone.png',
'assets/img/iphone2.png',
'assets/img/iphone1.png',
'assets/img/iphone3.png',
  ],
  poster:2,
  disc:50,
},
{
  title : 'samsung',
  price : 2000,
  kg : [1.760],
  sale : null,
  gift : false,
  avatar :[
'assets/img/samsung.jfif',
'assets/img/galaxy.png',
'assets/img/samsung1.jpg',

  ],
  poster:1,
  disc:30,
},
{
  title : 'pixel',
  price : 1000,
  kg : [1.700],
  sale : null,
  gift : false,
  avatar :[
'assets/img/pixel.png',
'assets/img/gpix.png',
'assets/img/pix.jfif',
  ],
  poster:1,
  disc:30,
},

];

changePoster(arrayind:any, imageind:any){
  this.prod[arrayind].poster = imageind
}

DisPrice(price:any, disc:any){
  return (price / 100) * disc;
}

FormReg = new FormGroup({
  firstName: new FormControl(''),
  Email: new FormControl(''),
  body: new FormControl(''),
  product:new FormControl('')
  
})

getDate() {
  console.log(this.FormReg.value);
}
}

