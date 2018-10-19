import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [HomeComponent, ProductsComponent, ProductComponent, CarouselComponent],
    imports: [CommonModule, HomeRoutingModule],
    exports: [HomeComponent]
})
export class HomeModule { }
