import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products/products.component';
import { CarouselComponent } from './home/carousel/carousel.component';
@NgModule({
    declarations: [ProductComponent, ProductsComponent, CarouselComponent],
    imports: [CommonModule],
    exports: [ProductComponent, ProductsComponent, CarouselComponent]
})
export class ModulesModule {
    // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    //     throwIfAlreadyLoaded(parentModule, 'CoreModule');
    // }
}
