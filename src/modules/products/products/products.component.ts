import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  topFilterItems: any;
  products: any;
  constructor() { }

  ngOnInit() {
    this.topFilterItems = [{ id: 1, feature: 'LATEST ARRIVAL', icon: 'fa fa-heart' },
    { id: 1, feature: 'FEATURES', icon: 'fa fa-star' },
    { id: 1, feature: 'TOP SELLERS', icon: 'fa fa-arrow-up' }];
    this.products = [
      { id: 1, img: '../../../assets/images/image1.jpg' },
      { id: 2, img: '../../../assets/images/image2.jpg' },
      { id: 2, img: '../../../assets/images/image3.jpg' },
      { id: 3, img: '../../../assets/images/image4.jpg' }];
  }

}
