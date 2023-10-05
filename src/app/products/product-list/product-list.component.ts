import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct = '';
  products = ['Webcam','ipad','samsung']

  onBuy(){
    window.alert(`Zakupiłeś!`)
  }

}
