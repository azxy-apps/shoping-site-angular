import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from '@app/page-not-found.component';
import { HomeComponent } from 'src/modules/home/home.component';

const routes: Routes = [
    // Fallback when no prior routes is matched
    { path: 'admin', loadChildren: '../modules/admin/admin.module#AdminModule' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
