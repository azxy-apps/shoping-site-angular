import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminComponent } from 'src/modules/admin/admin.component';

const routes: Routes = [{
    path: '',
    children: [
        { path: 'settings', pathMatch: 'full', component: AdminSettingsComponent },
        { path: '', pathMatch: 'full', component: AdminComponent }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

