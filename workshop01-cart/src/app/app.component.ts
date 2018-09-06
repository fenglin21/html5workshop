import { Component, ViewChild, ElementRef } from '@angular/core';
import { LineItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //for git

@ViewChild('ref')
detail;

  cart: LineItem[] = [];

  processLineItem(lineItem: LineItem) {
    this.cart.push(lineItem);
    console.log("cart = ", this.cart);
  }

  del(num : number){
    console.log("data>>", num);
    this.cart.splice(num,1);  //splice(index,1);
  }
}
