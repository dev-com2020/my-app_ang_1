import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct = 'Super telefon za 5 baniek';

  onBuy(name:string){
    window.alert(`Zakupiłeś ${name}!`)
  }

}
