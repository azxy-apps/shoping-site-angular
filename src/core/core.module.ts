import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
    imports: [],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent]
})
export class CoreModule {
    // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    //     throwIfAlreadyLoaded(parentModule, 'CoreModule');
    // }
}
