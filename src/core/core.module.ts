import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, NavbarComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, FooterComponent, NavbarComponent]
})
export class CoreModule {
    // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    //     throwIfAlreadyLoaded(parentModule, 'CoreModule');
    // }
}
