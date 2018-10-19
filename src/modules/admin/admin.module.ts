import { NgModule } from '@angular/core';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
    declarations: [AdminComponent, AdminSettingsComponent],
    imports: [AdminRoutingModule],
    exports: [AdminComponent]
})
export class AdminModule { }
