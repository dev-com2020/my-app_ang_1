import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges, AfterViewInit{
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.name)
    }
  }

  ngOnInit(): void {
    console.log(`Name to ${this.name} w w ngOnInit`)
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name']
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue
      const newValue = product.currentValue
      console.log(`Produkt zmieniony z ${oldValue} na ${newValue}`)
    }
  }
  constructor(){
    console.log(`Name to ${this.name} w konstruktorze`)
  }

  buy() {
    this.bought.emit(this.name);
  }
  get productName(): string {
    console.log(` Pobierz ${this.name}`)
    return this.name
  }
 
}
